import React from "react";
import Manish from "../../assests/Manish_Kumar.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={Manish} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
