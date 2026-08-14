import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Apply.css";
import { supabase } from "../../lib/supabase";

export default function Apply() {
  const { jobId } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    cover_letter: "",
  });

  const [fileName, setFileName] = useState("");

  /* ---------------- FETCH JOB ---------------- */
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("id", jobId).is("deleted_at", null)
          .single();

        if (error) throw error;
        setJob(data);
      } catch (err) {
        console.error("Job fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData((p) => ({ ...p, resume: file }));
    setFileName(file.name);
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      if (!formData.resume) {
        throw new Error("Resume is required");
      }

      /* 1️⃣ Upload resume */
      const fileExt = formData.resume.name.split(".").pop();
      const filePath = `${jobId}/${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, formData.resume, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      /* 2️⃣ Get public URL */
      const { data: urlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      if (!urlData?.publicUrl) {
        throw new Error("Failed to generate resume URL");
      }

      /* 3️⃣ Insert application */
      const { error: insertError } = await supabase
        .from("applications")
        .insert([
          {
            job_id: jobId,
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            cover_letter: formData.cover_letter.trim(),
            resume_url: urlData.publicUrl,
          },
        ]);

      if (insertError) throw insertError;

      setMessage("Application submitted successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
        cover_letter: "",
      });
      setFileName("");
    } catch (err) {
      console.error(err);
      setMessage("Submission failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p className="form-message">Loading role…</p>;
  }

  return (
    <main className="apply-page">
      <section className="apply-container">
        {/* LEFT */}
        <div className="apply-left">
          <h2>{job?.title}</h2>
          <p className="job-meta">
            {job?.department} · {job?.location}
          </p>

          <h3>Why work with us?</h3>
          <ul>
            <li>Build AI systems that are accountable and human-governed</li>
            <li>Work on real security and AI safety problems</li>
            <li>High ownership, low bureaucracy</li>
            <li>Remote-first, outcome-driven culture</li>
            <li>Engineering, research, and ethics move together</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="apply-right">
          <h3>Apply for this role</h3>

          <form onSubmit={handleSubmit} className="apply-form">
            <input
              name="name"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Mobile number"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <label className="file-upload">
              <span>{fileName || "Upload resume (PDF / DOC / DOCX)"}</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
              />
            </label>

            <textarea
              name="cover_letter"
              placeholder="Cover letter (optional)"
              rows={4}
              value={formData.cover_letter}
              onChange={handleChange}
            />

            <button type="submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit application"}
            </button>

            {message && <p className="form-message success">{message}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

