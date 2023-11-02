"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const MarqueeMenu = () => {
  const router = useRouter();

  return (
    <div className="demo-1">
      <div className="marquee-main">
        <nav className="menu">
          <div className="menu__item">
            <a className="menu__item-link">The Museum</a>
            <Image
              className="menu__item-img"
              src="https://miro.medium.com/v2/resize:fit:936/1*sL7SIMRoqoyjOr1RadOqww.jpeg"
              alt="Some image"
              width={300}
              height={300}
              style={{ width: "auto", height: "auto" }}
            />
            <div className="marquee">
              <div className="marquee__inner" aria-hidden="true">
                <span>The Museum</span>
                <span>The Museum</span>
                <span>The Museum</span>
                <span>The Museum</span>
              </div>
            </div>
          </div>
          <div className="menu__item" onClick={() => router.push("/timeline")}>
            <a className="menu__item-link">Timeline</a>
            <Image
              className="menu__item-img"
              src="https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg"
              alt="Some image"
              width={300}
              height={300}
              style={{ width: "auto", height: "auto" }}
            />
            <div className="marquee">
              <div className="marquee__inner" aria-hidden="true">
                <span>Timeline</span>
                <span>Timeline</span>
                <span>Timeline</span>
                <span>Timeline</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a className="menu__item-link">Our Crew</a>
            <Image
              className="menu__item-img"
              src="https://images.pexels.com/photos/404995/pexels-photo-404995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Some image"
              width={300}
              height={300}
              style={{ width: "auto", height: "auto" }}
            />
            <div className="marquee">
              <div className="marquee__inner" aria-hidden="true">
                <span>The Crew</span>
                <span>The Crew</span>
                <span>The Crew</span>
                <span>The Crew</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a className="menu__item-link">Contact</a>
            <Image
              className="menu__item-img"
              src="https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg"
              alt="Some image"
              width={300}
              height={300}
              style={{ width: "auto", height: "auto" }}
            />
            <div className="marquee">
              <div className="marquee__inner" aria-hidden="true">
                <span>Contact</span>
                <span>Contact</span>
                <span>Contact</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MarqueeMenu;
