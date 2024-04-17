import React from "react";
import "./style.css";
import about from "../../assets/about.png";
import fifth from "../../assets/fifth.jpg";
import link from '../../assets/link.png'

const About = () => {
  return (
    <div className="aboutContainer">
      <p>About</p>
      <hr classname="solid" />
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
          <img src={fifth} width="100%" />
        </div>
      </div>
      <hr classname="solid" />
<div className="blogTitleBlock">
    <h1></h1>
     <div className="blogContainer">
<div className="blog">
<h2>The ULTIMATE Figma UI Kit <br/>
(Tailwind-Figma)</h2>
<p>24.09.21</p>
<div className="link">
    <span>See Now</span>
    <img src={link} width='10' height='10'/>
 </div>

</div>
<div className="blog">
<h2>The ULTIMATE Figma UI Kit <br/>
(Tailwind-Figma)</h2>
<p>24.09.21</p>
<div className="link">
    <span>See Now</span>
    <img src={link} width='10' height='10'/>
 </div>

</div>
<div className="blog">
<h2>The ULTIMATE Figma UI Kit <br/>
(Tailwind-Figma)</h2>
<p>24.09.21</p>
<div className="link">
    <span>See Now</span>
    <img src={link} width='10' height='10'/>
 </div>

</div>
     </div>
     </div>
    </div>
  );
};

export default About;
