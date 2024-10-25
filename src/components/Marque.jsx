import React from "react";
import "./Marquee.css";
// Add the CSS in a separate file or style block

const Marque = () => {
  return (
    <div id="reviews">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <h2 class="font-medium tracking-tight text-neutral-900 dark:text-white sm:text-center text-2xl md:text-3xl mt-20 md:mt-40"
        >
          Trusted by learners around the world
        </h2>
        <p class="mt-2 text-lg text-neutral-600 dark:text-neutral-200 sm:text-center">
          Empowering global learners with top-quality education.
        </p>
        <div className="relative w-full h-48 overflow-hidden flex items-center">
          <div className="flex animate-horizontal-marquee space-x-6">
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Alice"
                  src="https://avatar.vercel.sh/alice"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">Alice</figcaption>
                  <p className="text-xs font-medium text-gray-500">@alice</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "This platform has completely transformed how I work. It's
                fantastic!"
              </blockquote>
            </figure>

            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Bob"
                  src="https://avatar.vercel.sh/bob"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">Bob</figcaption>
                  <p className="text-xs font-medium text-gray-500">@bob</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I've been using this for weeks, and I can't imagine going
                back."
              </blockquote>
            </figure>

            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>
            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of Charlie"
                  src="https://avatar.vercel.sh/charlie"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">
                    Charlie
                  </figcaption>
                  <p className="text-xs font-medium text-gray-500">@charlie</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "I love how intuitive everything is. It just works!"
              </blockquote>
            </figure>

            <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt="Profile picture of David"
                  src="https://avatar.vercel.sh/david"
                />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium">David</figcaption>
                  <p className="text-xs font-medium text-gray-500">@david</p>
                </div>
              </div>
              <blockquote className="mt-2 text-sm">
                "The speed and efficiency are unbelievable. Great job!"
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Marque;
