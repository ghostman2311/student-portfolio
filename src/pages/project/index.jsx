import React from "react";
import eight from "../../assets/eight.jpg";
import nine from "../../assets/nine.jpg";
import second from "../../assets/second.jpg";
import ten from "../../assets/ten.jpg";
import third from "../../assets/third.jpg";
import fifth from "../../assets/fifth.jpg";
import first from "../../assets/first.jpg";
import "./style.css";

const Project = () => {
  return (
    <div className="projectContainer">
      <div className="image">
        <img src={eight} width="1284" alt="pic" />
      </div>
      <div className="titleContainer">
        <h1>Collaborative Conversations</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna feugiat
          maecenas eu imperdiet varius nec pulvinar sem ultrices. Adipiscing
          viverra mauris, nunc nisl sociis dui. Sagittis, curabitur libero urna
          interdum metus.
        </p>
      </div>
      <div className="image">
        <img src={ten} width="1284" height="623" alt="pic" />
      </div>
      <div className="projectImagesContainer">
        <div className="project1">
          <img src={nine} width="100%" alt="pic" />
        </div>
        <div className="project1">
          <img src={third} width="100%" alt="pic" />
        </div>
      </div>

      <div className="allProjects">
        <div className="title">
          <h1>My Website Work</h1>
        </div>
        <div className="imageContainer">
          <div className="project">
            <img src={fifth} width="100%" alt="pic" />
            <h2>Neighborly Nexus</h2>
          </div>
          <div className="project">
            <img src={second} width="100%" alt="pic" />
            <h2>Harmony Zones</h2>
          </div>
          <div className="project">
            <img src={first} width="100%" alt="pic" />
            <h2>Unity Hub</h2>
          </div>
          <div className="project">
            <img src={fifth} width="100%" alt="pic" />
            <h2>Neighborly Nexus</h2>
          </div>
          <div className="project">
            <img src={second} width="100%" alt="pic" />
            <h2>Harmony Zones</h2>
          </div>
          <div className="project">
            <img src={first} width="100%" alt="pic" />
            <h2>Unity Hub</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
