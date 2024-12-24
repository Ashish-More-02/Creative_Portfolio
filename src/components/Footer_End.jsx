import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Footer_End = ({ contactRef }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* <h1 className="text-5xl font-semibold text-white text-center my-32">
        Contact me
      </h1> */}
      <div className="text-center font-mono text-white my-32" ref={contactRef} data-aos="fade-in">
        <h1 className="text-4xl font-semibold">Test UserName</h1>
        <p className="text-xl ">testuser@gmail.com</p>
      </div>
      <div className=" bg-gradient-to-b from-[#10131b] to-slate-800 text-center text-white font-mono" data-aos="fade-in">
        {/* links */}
        <div className="mt-20">
          <footer class="bg-transparent">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                  <div class="flex items-center">
                    {/* <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      class="h-8 me-3"
                      alt="PixelBloom Logo"
                    /> */}
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">
                      PixelBloom
                    </span>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase">
                      Resources
                    </h2>
                    <ul class="font-medium">
                      <li class="mb-4">No Links Available</li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase">
                      Follow Us
                    </h2>
                    <ul class="font-medium">
                      <li class="mb-4">GitHub</li>
                      <li class="mb-4">Fiver</li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
                    <ul class="font-medium">
                      <li class="mb-4">Privacy Policy</li>
                      <li class="mb-4">Terms & Conditions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
              <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm sm:text-center">
                  © 2025 PixelBloom. All Rights Reserved.
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer_End;
