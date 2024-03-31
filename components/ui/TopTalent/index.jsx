"use client";
import { useState } from "react";

const TopTalent = () => {
  const [showMore, setShowMore] = useState(false);

  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Full-Stack Developer",
      quote:
        "Final year student, has built multiple good projects (Travel Chatbot, Course selling website, etc.) but hasn't deployed them",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Open-Source Contributor",
      quote:
        "IET'26 student. 30+ PRs merged into Metamask. Has good freelancer experience and an active participator in hackathons.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "Full-Stack Developer",
      quote:
        "4 months of internship/freelance experience. Has good projects: Google Docs clone, Real-time chat app, and TypeForm clone.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      name: "Samantha Doe",
      title: "Full-Stack Developer",
      quote:
        "3 months of internship experience, MLH Hackathon x2 Winner, has experience with LLM APIs, Has built multiple full-stack projects",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "John Smith",
      title: "Front-end Developer",
      quote:
        "4 months of internship experience, has built decent full-stack projects (YouTube clone but it's not live and GitHub links for projects are missing",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      name: "Emily Johnson",
      title: "Community Lead",
      quote:
        "Benett'26 student, has won 4+ hackathons, GSDC lead managing 70+ students organizing workshops and sessions",
    },
  ];

  return (
    <section className="py-14" id="#top-talents">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Top Talents
          </h3>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials
              .slice(0, showMore ? testimonials.length : 3)
              .map((item, idx) => (
                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                  <figure>
                    <div className="flex items-center gap-x-4">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      <p className="mt-6 text-gray-700">{item.quote}</p>
                    </blockquote>
                  </figure>
                </li>
              ))}
          </ul>
          <div className="mt-8 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTalent;
