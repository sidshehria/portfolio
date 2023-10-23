/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg";

const imageAltText = "desktop ";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "YouTube Transcript Summarizer",
    description:
      "In this project, you will be a creating a Chrome Extension which will make a request to backend REST API where it will perform NLP and respond with a summarized version of a YouTube transcript.",
    url: "https://github.com/sidshehria/Youtube-Transcript-Summarizer",
  },
  {
    title: "Security-Manager",
    description:
      "A Python based Program designed for Windows systems and focuses on implementing various security-related actions using administrative privileges.",
    url: "https://github.com/sidshehria/Security-Manager",
  },
  {
    title: "My Resume Site",
    description:
      "A website to showcase my resume and projects.",
    url: "https://sidshehria.github.io/resume/",
  },
  {
    title: "My Design Portfolio",
    description:
      "Here you'll get to see some of my designs.",
    url: "https://www.behance.net/siddharshehria",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
