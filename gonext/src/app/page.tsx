"use client";

// pages/index.tsx
import React from "react";

const projects = [
  { title: "Project 1", description: "A project description.", link: "#" },
  { title: "Project 2", description: "A project description.", link: "#" },
  { title: "Project 3", description: "A project description.", link: "#" },
  { title: "Project 4", description: "A project description.", link: "#" },
];

const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS", "Next.js"];

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <p className="text-lg">Welcome to Go Next. Here's a look at my work.</p>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 bg-white text-center" id="about">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Hello! I'm a passionate web developer with experience in front-end and
          back-end technologies. I love building modern, responsive websites and
          applications. I’m always learning and exploring new technologies to
          improve my skills.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-50" id="projects">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {project.title}
              </h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white text-center" id="skills">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-lg text-blue-600 font-medium bg-blue-100 py-2 px-4 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50 text-center" id="contact">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Contact Me
        </h2>
        <p className="text-lg mb-4">Feel free to reach out to me!</p>
        <a
          href="mailto:your-email@example.com"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Email Me
        </a>
      </section>

      {/* <footer className="py-6 bg-blue-600 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
