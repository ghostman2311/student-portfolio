import "./style.css";

const Homepage = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <h1 className="hero-text">
            I’m Zachary Ropson, an aspiring software developer and current
            software development student at Keyin College.
          </h1>
          <img className="landing" src="/landing.png" alt="landing" />
        </div>
      </section>
      <section id="portfolio">
        <h1 className="portfolio-header">Projects</h1>
        <div className="separator"></div>
        <div className="project-container">
          <div className="card">
            <h2 className="project-text">01 Loot Cove Website design</h2>
            <img className="project-img" src="/project-1.png" />
          </div>
          <div className="card">
            <h2 className="project-text">02 Loot Cove Website design</h2>
            <img className="project-img" src="/project-1.png" />
          </div>
          <div className="card">
            <h2 className="project-text">03 Loot Cove Website design</h2>
            <img className="project-img" src="/project-1.png" />
          </div>
        </div>
      </section>
      <section id="about">
        <h1 className="about-header">About Me</h1>
        <div className="separator"></div>
        <div className="about-container">
          <p className="about-descrition">
            I'm a product designer working on various projects on a wide range
            of clients. My skillset lies on creating branding packages &
            websites to deliver the full online experience for new and also
            veteran businesses.
            <span>
              You can often find me creating videos about design over on
              YouTube, or sharing my thoughts on my podcast, Dialogue With
              Designers . I'm passionate about giving back and teaching what I
              know to the next generation of designers.‍
            </span>
          </p>
          <div className="about-right">Right Side</div>
        </div>
        <div className="skills">
          <ul>
            <li>Illustrator</li>
            <li>Webflow</li>
            <li>Illustrator</li>
            <li>Webflow</li>
            <li>Illustrator</li>
            <li>Webflow</li>
            <li>Webflow</li>
          </ul>
        </div>
        <div className="zigzag-line" />
      </section>
    </div>
  );
};

export default Homepage;
