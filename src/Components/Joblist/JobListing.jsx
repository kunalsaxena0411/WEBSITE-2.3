import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JobListing.css";
import API_BASE from "../../config/api";

export default function JobListing() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const mockData = [
          {
            id: "job-1",
            role: "Senior AI Governance Engineer",
            location: "San Francisco, CA / Remote",
            business_area: "Security & Safety Orchestration",
            created_at: new Date().toISOString(),
          },
          {
            id: "job-2",
            role: "Lead Threat Intelligence Analyst",
            location: "New York, NY / Remote",
            business_area: "Threat Research",
            created_at: new Date().toISOString(),
          },
          {
            id: "job-3",
            role: "Full Stack Engineer (React/Node)",
            location: "Remote",
            business_area: "Product Engineering",
            created_at: new Date().toISOString(),
          }
        ];
        setJobs(mockData);
        setError(false);
      } catch (err) {
        console.error("Job fetch failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="career-loading">
        <p>Loading open positions…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="career-error">
        <p>Unable to load job positions at the moment.</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="career-section">
      <h1 className="career-title">Open Positions</h1>

      <div className="career-grid">
        {jobs.map((job) => (
          <div key={job.id} className="career-card">
            <h2 className="career-role">{job.role}</h2>

            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Business Area:</strong> {job.business_area}
            </p>
            <p>
              <strong>Posted on:</strong>{" "}
              {new Date(job.created_at).toLocaleDateString()}
            </p>

            <Link to={`/Job?role=${encodeURIComponent(job.role)}`}>
              <button className="career-apply-btn">Apply</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
