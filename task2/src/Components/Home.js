import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HeroImage from "../Notes (2).gif";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="left-hero">
          <div className="card">
            <span>World's #1 Note-Taking App!</span>
            <h1>Note-ify</h1>
            <p>
              Welcome to Note-ify, your new go-to for effortless note-taking!
              Designed with simplicity and speed in mind, Note-ify helps you
              capture ideas, organize thoughts, and remember everything that
              matters, wherever you are. Your brilliant ideas are always
              just a few clicks away, beautifully organized and instantly
              retrievable. Start jotting down your next big idea today and
              experience the clarity that comes with a perfectly organized mind!
            </p>
           <Link to='/make-notes'>
                       <button className="get-started">Get Started<FontAwesomeIcon className="arrow-icon" icon={faArrowRight}/></button>
           </Link>

          </div>
        </div>
        <div className="right-hero">
          <img src={HeroImage} alt="Main-Image" className="svgImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
