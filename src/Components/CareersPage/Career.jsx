// import React, { useEffect, useState } from "react";
// import "./Career.css";

// export default function Career() {
//   /* ---------------- JOB POSITIONS ---------------- */

//   const [positions, setPositions] = useState([]);
//   const [loadingPositions, setLoadingPositions] = useState(true);
//   const [positionError, setPositionError] = useState(false);

//   /* ---------------- FORM STATE ---------------- */

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact_no: "",
//     current_location: "",
//     role: "",
//     Resume: null,
//   });

//   const [fileName, setFileName] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [message, setMessage] = useState("");

//   /* ---------------- FETCH POSITIONS (PROXY) ---------------- */

//   useEffect(() => {
//     const fetchPositions = async () => {
//       try {
//         const res = await fetch("/api/fetchAllPosition");

//         if (!res.ok) throw new Error("Failed to fetch positions");

//         const data = await res.json();
//         setPositions(Array.isArray(data) ? data : []);
//         setLoadingPositions(false);
//       } catch (err) {
//         console.error("Position fetch error:", err);
//         setPositionError(true);
//         setLoadingPositions(false);
//       }
//     };

//     fetchPositions();
//   }, []);

//   /* ---------------- HANDLERS ---------------- */

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setFormData((prev) => ({ ...prev, Resume: file }));
//     setFileName(file.name);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setMessage("");

//     const body = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value) body.append(key, value);
//     });

//     try {
//       const res = await fetch("/api/applyJobProfile", {
//         method: "POST",
//         body,
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Submission failed");
//       }

//       setMessage("Application submitted successfully. Our team will reach out.");
//       setFormData({
//         name: "",
//         email: "",
//         contact_no: "",
//         current_location: "",
//         role: "",
//         Resume: null,
//       });
//       setFileName("");
//     } catch (err) {
//       console.error(err);
//       setMessage("Submission failed. Please try again later.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   /* ---------------- UI ---------------- */

//   return (
//     <main className="career-page">
//       {/* HERO */}
//       <section className="career-hero">
//         <h1>Careers at ANTI AI</h1>
//         <p>
//           Join a team working at the intersection of artificial intelligence,
//           security, and responsibility.
//         </p>
//       </section>

//       {/* CONTENT */}
//       <section className="career-content">
//         <div className="career-info">
//           <h2>Why work with us?</h2>
//           <ul>
//             <li>Work on real AI safety and detection problems</li>
//             <li>Freedom to explore ideas beyond rigid tech stacks</li>
//             <li>Strong engineering and research culture</li>
//             <li>Remote-friendly, outcome-driven environment</li>
//             <li>Ownership, accountability, and impact</li>
//           </ul>
//         </div>

//         {/* FORM */}
//         <div className="career-form-card">
//           <h3>Apply for a position</h3>

//           {loadingPositions && (
//             <p className="form-message">Loading job positions…</p>
//           )}

//           {positionError && (
//             <p className="form-message">
//               Unable to load job positions at the moment. Please try again later.
//             </p>
//           )}

//           {!loadingPositions && !positionError && (
//             <form onSubmit={handleSubmit} className="career-form">
//               <input
//                 name="name"
//                 placeholder="Full name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//               />

//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email address"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />

//               <input
//                 name="contact_no"
//                 placeholder="Mobile number"
//                 required
//                 value={formData.contact_no}
//                 onChange={handleChange}
//               />

//               <input
//                 name="current_location"
//                 placeholder="Current location"
//                 required
//                 value={formData.current_location}
//                 onChange={handleChange}
//               />

//               {/* ROLE DROPDOWN */}
//               <select
//                 name="role"
//                 required
//                 value={formData.role}
//                 onChange={handleChange}
//               >
//                 <option value="">Select a role</option>
//                 {positions.map((pos) => (
//                   <option key={pos.id} value={pos.role}>
//                     {pos.role} — {pos.location}
//                   </option>
//                 ))}
//               </select>

//               <label className="file-upload">
//                 <span>{fileName || "Upload resume (PDF, DOC, DOCX)"}</span>
//                 <input
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   required
//                   onChange={handleFile}
//                 />
//               </label>

//               <button type="submit" disabled={submitting}>
//                 {submitting ? "Submitting…" : "Submit application"}
//               </button>

//               {message && <p className="form-message">{message}</p>}
//             </form>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }


// import React, { useEffect, useState } from "react";
// import "./Career.css";
// import API_BASE from "../../config/api"; // ✅ FIXED (no braces)

// export default function Career() {
//   const [positions, setPositions] = useState([]);
//   const [loadingPositions, setLoadingPositions] = useState(true);
//   const [positionError, setPositionError] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact_no: "",
//     current_location: "",
//     role: "",
//     Resume: null,
//   });

//   const [fileName, setFileName] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchPositions = async () => {
//       try {
//         const res = await fetch(`${API_BASE}/api/fetchAllPosition`);
//         if (!res.ok) throw new Error("Failed to fetch positions");

//         const data = await res.json();
//         setPositions(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Position fetch error:", err);
//         setPositionError(true);
//       } finally {
//         setLoadingPositions(false);
//       }
//     };

//     fetchPositions();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((p) => ({ ...p, Resume: file }));
//     setFileName(file.name);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setMessage("");

//     const body = new FormData();
//     Object.entries(formData).forEach(([k, v]) => v && body.append(k, v));

//     try {
//       const res = await fetch(`${API_BASE}/api/applyJobProfile`, {
//         method: "POST",
//         body,
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);

//       setMessage("Application submitted successfully. Our team will reach out.");
//       setFormData({
//         name: "",
//         email: "",
//         contact_no: "",
//         current_location: "",
//         role: "",
//         Resume: null,
//       });
//       setFileName("");
//     } catch (err) {
//       console.error(err);
//       setMessage("Submission failed. Please try again later.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <main className="career-page">
//       <section className="career-hero">
//         <h1>Careers at ANTI AI</h1>
//         <p>
//           Join a team working at the intersection of artificial intelligence,
//           security, and responsibility.
//         </p>
//       </section>

//       <section className="career-content">
//         <div className="career-info">
//           <h2>Why work with us?</h2>
//           <ul>
//             <li>Work on real AI safety and detection problems</li>
//             <li>Freedom to explore ideas beyond rigid tech stacks</li>
//             <li>Strong engineering and research culture</li>
//             <li>Remote-friendly, outcome-driven environment</li>
//             <li>Ownership, accountability, and impact</li>
//           </ul>
//         </div>

//         <div className="career-form-card">
//           <h3>Apply for a position</h3>

//           {loadingPositions && <p className="form-message">Loading job positions…</p>}
//           {positionError && (
//             <p className="form-message error">
//               Unable to load job positions. Please try again later.
//             </p>
//           )}

//           {!loadingPositions && !positionError && (
//             <form onSubmit={handleSubmit} className="career-form">
//               <input name="name" placeholder="Full name" required value={formData.name} onChange={handleChange} />
//               <input name="email" type="email" placeholder="Email address" required value={formData.email} onChange={handleChange} />
//               <input name="contact_no" placeholder="Mobile number" required value={formData.contact_no} onChange={handleChange} />
//               <input name="current_location" placeholder="Current location" required value={formData.current_location} onChange={handleChange} />

//               <select name="role" required value={formData.role} onChange={handleChange} className="career-select">
//                 <option value="">Select a role</option>
//                 {positions.map((pos) => (
//                   <option key={pos.id} value={pos.role}>
//                     {pos.role} — {pos.location}
//                   </option>
//                 ))}
//               </select>

//               <label className="file-upload">
//                 <span>{fileName || "Upload resume (PDF, DOC, DOCX)"}</span>
//                 <input type="file" accept=".pdf,.doc,.docx" required onChange={handleFile} />
//               </label>

//               <button type="submit" disabled={submitting}>
//                 {submitting ? "Submitting…" : "Submit application"}
//               </button>

//               {message && <p className="form-message success">{message}</p>}
//             </form>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }


import React, { useEffect, useState } from "react";
import "./Career.css";
import { supabase } from "../../lib/supabase";

export default function Career() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* ---------------- FETCH JOBS ---------------- */
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("is_active", true).is("deleted_at", null)
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPositions(data || []);
      } catch (err) {
        console.error("Job fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main className="career-page">
      {/* ---------------- HERO ---------------- */}
      <section className="career-hero">
        <h1>Careers at ANTI AI</h1>
        <p>
          Join a team working at the intersection of artificial intelligence,
          security, and responsibility.
        </p>
      </section>

      {/* ---------------- JOB LIST ---------------- */}
      <section className="career-listing">
        <h2 className="career-section-title">Open Positions</h2>

        {loading && <p className="form-message">Loading job positions…</p>}

        {error && (
          <p className="form-message error">
            Unable to load job positions at the moment.
          </p>
        )}

        {!loading && !error && positions.length === 0 && (
          <p className="form-message">No open positions currently.</p>
        )}

        <div className="job-grid">
          {positions.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>

              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Department:</strong> {job.department}
              </p>

              <a href={`/apply/${job.id}`} className="apply-btn">
                Apply
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

