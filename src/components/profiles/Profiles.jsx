import React from "react";
import "./profiles.css";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Profiles = () => {
  return (
    <section id="profiles">
      <h5>Coding Skills</h5>
      <h2>Coding Profiles</h2>

      <div className="container profile__container">
        <article className="profile__option">
          <SiLeetcode className="profile__option-icon" />
          {/* <h5>stepheneliazer18</h5> */}
          <h4>Leetcode</h4>
          <h5 className="light-grey">1000+ Problems</h5>
          <a href="https://leetcode.com/manishk4514/" target="_blank">
            View Profile
          </a>
        </article>
        <article className="profile__option">
          <SiGeeksforgeeks className="profile__option-icon" />
          {/* <h5>stepheneliazer18</h5> */}
          <h4>GeeksForGeeks</h4>
          <h5 className="light-grey">1600+ Score</h5>
          <a
            href="https://auth.geeksforgeeks.org/user/manishk4514"
            target="_blank"
          >
            View Profile
          </a>
        </article>
        <article className="profile__option">
          <SiCodechef className="profile__option-icon" />
          {/* <h5>stephen18</h5> */}
          <h4>Codechef</h4>
          <h5 className="light-grey">1521 Rating</h5>
          <a href="https://www.codechef.com/users/manishk4514" target="_blank">
            View Profile
          </a>
        </article>
      </div>
    </section>
  );
};

export default Profiles;
