import React from "react";

function YoutubeVideo() {
  return (
    <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-40">
    <div className="col-span-2 ">
    <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto">
      Latest Youtube Videos
    </h1>
    <p className="flex gap-2 text-zinc-400 text-sm max-w-2xl mt-4 leading-loose tracking-wide">
      <span className="flex items-center justify-center gap-1">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
        </svg>
        181K subscribers
      </span>
      <span>•</span>
      <span className="flex items-center justify-center gap-1">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
        352 videos
      </span>
    </p>
    <div className="flex max-w-3xl flex-col">
      <a
        className="relative md:p-8"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/"
      >
        <div className="md:flex gap-4">
          <div>
            <img
              alt="What is Kubernetes? | Kubernetes Explained"
              loading="lazy"
              width="480"
              height="360"
              decoding="async"
              src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            />
          </div>
          <div className="relative z-50">
            <h2 className="text-zinc-200 font-bold text-lg mt-4">
              What is Kubernetes? | Kubernetes Explained
            </h2>
            <small className="text-zinc-500 block mt-1">19 Oct 2024</small>
            <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
              Hey everyone, In this video, we will deep dive into the
              world of Kubernetes. We will understand what Kubernetes is
              and how ...
            </p>
          </div>
        </div>
      </a>

      <a
        className="relative md:p-8"
        target="_blank"
        href="https://www.youtube.com/"
      >
        <div className="md:flex gap-4">
          <div>
            <img
              alt="Contribute to Open Source | Hacktoberfest 2024"
              loading="lazy"
              width="480"
              height="360"
              decoding="async"
              src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            />
          </div>
          <div className="relative z-50">
            <h2 className="text-zinc-200 font-bold text-lg mt-4">
              Contribute to Open Source | Hacktoberfest 2024
            </h2>
            <small className="text-zinc-500 block mt-1">10 Oct 2024</small>
            <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
              Visit oss.gg: https://oss.gg Hey everyone, In this video, I
              will show you how you can contribute to Open source this
              year and get a ...
            </p>
          </div>
        </div>
      </a>

      <a
        className="relative md:p-8"
        target="_blank"
        href="https://www.youtube.com/"
      >
        <div className="md:flex gap-4">
          <div>
            <img
              alt="Validating References with Lifetimes | Rust Book"
              loading="lazy"
              width="480"
              height="360"
              decoding="async"
              src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            />
          </div>
          <div className="relative z-50">
            <h2 className="text-zinc-200 font-bold text-lg mt-4">
              Validating References with Lifetimes | Rust Book
            </h2>
            <small className="text-zinc-500 block mt-1">07 Oct 2024</small>
            <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
              Chapter 10.3. Validating References with Lifetimes In this
              chapter, we will explore lifetimes in Rust, a powerful
              feature that helps ...
            </p>
          </div>
        </div>
      </a>
    </div>
    </div>

    <div>
      <h2 className="font-bold text-zinc-50 mb-2">Gears</h2>
      <a className="group" href="https://amzn.to/46YWMUE" target="_blank">
        <div className="my-8">
          <h4 className="text-base font-bold text-zinc-100 group-hover:text-blue-400">
            14 Inch M3 Max MacBook Pro
          </h4>
          <p className="text-sm text-zinc-400 leading-loose">
            My main machine for development that I've been using for over 6
            months now. Such a beast of a machine. I love it.
          </p>
          </div>
        </a>
        <a class="group" href="https://amzn.to/46ZcPSa" target="_blank">
          <div class="my-8">
            <h4 class="text-base font-bold text-zinc-100 group-hover:text-blue-400">
              Logitech MX Mechanical
            </h4>
            <p class="text-sm text-zinc-400 leading-loose">
              My main keyboard for development. I love the clicky keys and the
              compact size. I use it with a Logitech MX Master 3 mouse.
            </p>
          </div>
        </a>
        <a class="group" href="https://amzn.to/3AEycfL" target="_blank">
          <div class="my-8">
            <h4 class="text-base font-bold text-zinc-100 group-hover:text-blue-400">
              Logitech MX Master 3S
            </h4>
            <p class="text-sm text-zinc-400 leading-loose">
              My main mouse for development. I love the scroll wheel and the
              thumb buttons. I use it with a Logitech MX Mechanical
            </p>
          </div>
        </a>
        <a class="group" href="https://amzn.to/4dCmqkD" target="_blank">
          <div class="my-8">
            <h4 class="text-base font-bold text-zinc-100 group-hover:text-blue-400">
              BenQ 4K Monitor
            </h4>
            <p class="text-sm text-zinc-400 leading-loose">
              Main monitor I use for coding. I love the display and 4K is really
              good to have.
            </p>
          </div>
          </a>
          </div>
          </div>

  );
}

export default YoutubeVideo;
