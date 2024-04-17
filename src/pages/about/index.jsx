import React from "react";
import seventh from "../../assets/seventh.jpg";
import link from "../../assets/link.png";
import "./style.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <p>About Me</p>
      <hr />
      <div className="introBlock">
        <div className="introDescription">
          <p>
            I'm a product designer working on various projects on a wide range
            of clients. My skillset lies on creating branding packages &
            websites to deliver the full online experience for new and also
            veteran businesses. You can often find me creating videos about
            design over on YouTube, or sharing my thoughts on my podcast,
            Dialogue With Designers . I'm passionate about giving back and
            teaching what I know to the next generation of designers.
          </p>
          <p>
            You can often find me creating videos about design over on YouTube,
            or sharing my thoughts on my podcast, Dialogue With Designers . I'm
            passionate about giving back and teaching what I know to the next
            generation of designers.
          </p>
        </div>
        <div className="image">
          <img src={seventh} width="100%" alt='pic'/>
        </div>
      </div>

      <div className="blogTitleBlock">
        <h1>Recent Blogs</h1>
        <div className="blogContainer">
          <div className="blog">
            <h2>
              The ULTIMATE Figma UI Kit <br />
              (Tailwind-Figma)
            </h2>
            <p>24.09.21</p>
            <div className="link">
              <span>See Now</span>
              <img src={link} width="10" height="10" alt='link' />
            </div>
          </div>
          <div className="blog">
            <h2>
              The ULTIMATE Figma UI Kit <br />
              (Tailwind-Figma)
            </h2>
            <p>24.09.21</p>
            <div className="link">
              <span>See Now</span>
              <img src={link} width="10" height="10" alt='link' />
            </div>
          </div>
          <div className="blog">
            <h2>
              The ULTIMATE Figma UI Kit <br />
              (Tailwind-Figma)
            </h2>
            <p>24.09.21</p>
            <div className="link">
              <span>See Now</span>
              <img src={link} width="10" height="10" alt='link'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
