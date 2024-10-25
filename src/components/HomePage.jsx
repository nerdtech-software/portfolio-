import React from "react";
import Courses from "./Courses";
import Footer from "./Footer";
import HomeIntro from "./HomeIntro";
import HomeNav from "./HomeNav";
import HomeWorkExperience from "./HomeWorkExperience";
import Marque from "./Marque";
import YoutubeVideo from "./YoutubeVideo";

const HomePage = () => {
  return (
     <div className="bg-black">
      <HomeNav/>
     <HomeIntro/>
     <HomeWorkExperience/>
     <Courses/>
     <Marque/>
     <YoutubeVideo/>
     <Footer/>
    
     </div>
  );
};

export default HomePage;
