import React, { useEffect, useState } from "react";

const HomeWorkExperience = () => {
  const [activeCompany, setActiveCompany] = useState("Teachyst");

  // Dynamic scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".company-section");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveCompany(section.getAttribute("data-company"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-2xl md:text-3xl text-white font-bold mt-20 md:mt-40">
        Work Experience
      </h1>
      <p className="text-zinc-400 text-sm md:text-base mt-2 mx-auto p-3">
        I switch a lot of companies. It's mostly about the culture.
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-20 max-w-2xl mx-auto">
        {/* Company List */}
        <div className="flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible">
          <div className="absolute -left-6 w-px h-full bg-zinc-800">
            <span
              className={`absolute z-20 h-[0.1rem] w-[0.1rem] rounded-full transition-all ${
                activeCompany === "Teachyst" ? "bg-cyan-500" : "bg-zinc-700"
              }`}
            />
          </div>

          {/* Teachyst Button */}
          <div className="relative my-2">
            <button
              onClick={() => setActiveCompany("Teachyst")}
              className={`px-4 py-2 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group ${
                activeCompany === "Teachyst"
                  ? "bg-cyan-500 text-white"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              <div className="p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                <img
                  alt="Teachyst"
                  src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                  className="flex-shrink-0"
                />
              </div>
              <span>Teachyst</span>
            </button>
          </div>

          {/* Dimension Button */}
          <div className="relative my-2">
            <button
              onClick={() => setActiveCompany("Dimension")}
              className={`px-4 py-2 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group ${
                activeCompany === "Dimension"
                  ? "bg-cyan-500 text-white"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              <div className="p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                <img
                  alt="Dimension"
                  src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                  className="flex-shrink-0"
                />
              </div>
              <span>Dimension</span>
            </button>
          </div>

          {/* Emitrr Button */}
          <div className="relative my-2">
            <button
              onClick={() => setActiveCompany("Emitrr")}
              className={`px-4 py-2 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group ${
                activeCompany === "Emitrr"
                  ? "bg-cyan-500 text-white"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              <div className="p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                <img
                  alt="Emitrr"
                  src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                  className="flex-shrink-0"
                />
              </div>
              <span>Emitrr</span>
            </button>
          </div>

          {/* Trryst Button */}
          <div className="relative my-2">
            <button
              onClick={() => setActiveCompany("Trryst")}
              className={`px-4 py-2 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group ${
                activeCompany === "Trryst"
                  ? "bg-cyan-500 text-white"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              <div className="p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                <img
                  alt="Trryst"
                  src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                  className="flex-shrink-0"
                />
              </div>
              <span>Trryst</span>
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="md:pl-10 flex-1">
          {activeCompany === "Teachyst" && (
            <div className="company-section" data-company="Teachyst">
              <h1 className="text-2xl font-bold text-zinc-100">
                Founder &amp; CEO{" "}
                <span className="text-cyan-500">@Teachyst</span>
              </h1>
              <div className="text-zinc-400 text-sm tracking-widest">
                Sep 2024 - Present
              </div>
              <p className="text-zinc-400 text-sm">India</p>
              <div className="my-2 space-y-2">
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    White Labeled NextGen LMS
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Platform for educators and creators
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeCompany === "Dimension" && (
            <div className="company-section" data-company="Dimension">
              <h1 className="text-2xl font-bold text-zinc-100">
                Senior Engineer{" "}
                <span className="text-cyan-500">@Dimension</span>
              </h1>
              <div className="text-zinc-400 text-sm tracking-widest">
                Jan 2022 - Present
              </div>
              <p className="text-zinc-400 text-sm">India</p>
              <div className="my-2 space-y-2">
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Leading development of core product features
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Collaborating with cross-functional teams
                  </span>
                </div>
              </div>
            </div>
          )}
           {activeCompany === "Emitrr" && (
            <div className="company-section" data-company="Emitrr">
              <h1 className="text-2xl font-bold text-zinc-100">
                Senior Engineer{" "}
                <span className="text-cyan-500">@Emitrr</span>
              </h1>
              <div className="text-zinc-400 text-sm tracking-widest">
                Jan 205 - Present
              </div>
              <p className="text-zinc-400 text-sm">mumbai</p>
              <div className="my-2 space-y-2">
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Leading development of core product features
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Collaborating with cross-functional teams
                  </span>
                </div>
              </div>
            </div>
          )}


{activeCompany === "Trryst" && (
            <div className="company-section" data-company="Trryst">
              <h1 className="text-2xl font-bold text-zinc-100">
                Senior Engineer{" "}
                <span className="text-cyan-500">@Trryst</span>
              </h1>
              <div className="text-zinc-400 text-sm tracking-widest">
                Jan 2055 - Present
              </div>
              <p className="text-zinc-400 text-sm">nashik</p>
              <div className="my-2 space-y-2">
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Leading development of core product features
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Collaborating with cross-functional teams
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Other companies can follow the same pattern */}
        </div>
      </div>
    </div>
  );
};

export default HomeWorkExperience;
