import React from "react";
import Tweet from "./Tweet";

const tweetsList = [
  {
    name: "Jackie O",
    description: "wear a mask dummies!",
  },
  {
    name: "Jackie O",
    description: "Air quality in Seattle is red alert"
  }
];

function ListOfTweets() {
  return (
    <React.Fragment>
      {tweetsList.map((tweet, index) => (
        <Tweet 
        title={tweet.name}
        body={tweet.description}
        key={index}
        />
      ))}
    </React.Fragment>
  )
}
export default ListOfTweets;