import React from "react";
import ProfileInfo from "./ProfileInfo";
import AboutMe from "./AboutMe";
import ListOfTweet from "./ListOfTweets";

function App() {
  return <React.Fragment>
    <ProfileInfo />
    <AboutMe />
    <ListOfTweet />
  </React.Fragment>;
}

export default App;
