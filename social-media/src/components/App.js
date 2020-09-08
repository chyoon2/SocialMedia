import React from "react";
import ProfileInfo from "./ProfileInfo";
import AboutMe from "./AboutMe";
import TweetControl from "./TweetControl";

function App() {
  return <React.Fragment>
    <ProfileInfo />
    <hr />
    <AboutMe />
    <hr />
    <hr />
    <TweetControl />
  </React.Fragment>;
}

export default App;
