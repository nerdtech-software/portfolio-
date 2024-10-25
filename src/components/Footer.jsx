import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8">
        <div className="flex flex-col justify-center items-center py-10 ">
          <a
            className="font-bold flex items-center justify-center space-x-2 text-white text-xl"
            href="/"
          >
            <img
              alt="Avatar"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              data-nimg="1"
              className="transition duration-500 blur-0 scale-100 rounded-full"
              style={{ color: "transparent" }}
              srcSet="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
              src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
            />
            <span className="font-inter font-bold text-white text-xl">
              shivam
            </span>
          </a>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <a className="text-zinc-100 text-sm relative" href="/about">
              <span className="relative z-10 px-2 py-2 inline-block">About</span>
            </a>
            <a className="text-zinc-100 text-sm relative" href="/service">
              <span className="relative z-10 px-2 py-2 inline-block">
              Service
              </span>
            </a>
            <a
              target="__blank"
              rel="noopener noreferrer"
               href="/contact"
              className="text-zinc-100 text-sm relative"
            >
              <span className="relative z-10 px-2 py-2 inline-block">Contact</span>
            </a>
          </div>
          <div className="flex flex-row justify-center space-x-2 mt-2">
            <a
              href="https://www.youtube.com/@piyushgargdev"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {/* SVG for YouTube icon */}
              </span>
            </a>
            <a
              href="https://x.com/piyushgarg_dev"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {/* SVG for X icon */}
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/piyushgarg195/"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {/* SVG for LinkedIn icon */}
              </span>
            </a>
            <a
              href="https://github.com/piyushgarg-dev"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {/* SVG for GitHub icon */}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
