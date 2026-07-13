import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Image.css";

const ImageComponent = ({
  imageUrl,
  description,
  title,
  reverse,
  keywords = [],
  platformLinks = {},
  learnMoreLink,
}) => {
  return (
    <div className={`image-container ${reverse ? "reverse" : ""}`}>
      <div className="image-wrapper">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="description-wrapper">
        <h1 className="card-logo">{title}</h1>

        <p>{description}</p>

        <div className="keywords">
          {keywords.map((keyword, index) => {
            const isLinked =
              keyword === "iOS";

            return (
              <span key={index} className="keyword-item">
                {isLinked ? (
<a
  href={platformLinks[keyword]}
  target="_blank"
  rel="noopener noreferrer"
>
  {keyword}
</a>

                ) : (
                  <span>{keyword}</span>
                )}
              </span>
            );
          })}
        </div>

        <Link to={learnMoreLink} className="learn-more-btn">
          Learn More
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      imageUrl:
        "/static/Mobile_app_home.png",
      title: "ANTI GPT",
      description:
        "A privacy-first AI verification platform designed to detect AI-generated images, videos, audio, and scams. Trust nothing. Verify everything.",
      keywords: [
        "Deepfake Detection",
        "Voice Clone Detection",
        "Privacy First",
        "Multi-engine AI",
        "Download Now:",
        "iOS",
        
      ],
      platformLinks: {
        iOS: "https://apps.apple.com/us/app/anti-0/id6757922031",
        
      },
      reverse: true,
      learnMoreLink: "/products/antigpt",
    },
    {
      imageUrl:
        "/static/enterprise_product.jpeg",
      title: "ANTI_TOD",
      description:
        "An enterprise-grade security platform built to predict threats, enforce governed AI decisions, and protect modern cloud infrastructure before attacks occur.",
      keywords: [
        "Predictive Security",
        "Threat Forecasting",
        "Governed AI",
        "Human-in-the-loop",
      ],
      platformLinks: {},
      reverse: false,
      learnMoreLink: "/products/antitod",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".image-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageWrapper =
              entry.target.querySelector(".image-wrapper img");
            const descriptionWrapper =
              entry.target.querySelector(".description-wrapper");

            if (entry.target.classList.contains("reverse")) {
              imageWrapper.classList.add("fade-in-right");
              descriptionWrapper.classList.add("fade-in-left");
            } else {
              imageWrapper.classList.add("fade-in-left");
              descriptionWrapper.classList.add("fade-in-right");
            }

            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <ImageComponent
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          keywords={project.keywords}
          platformLinks={project.platformLinks}
          reverse={project.reverse}
          learnMoreLink={project.learnMoreLink}
        />
      ))}
    </div>
  );
};

export default Projects;
