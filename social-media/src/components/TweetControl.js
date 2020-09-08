import React from 'react';
import ListOfTweets from'./ListOfTweets';
import CreateTweet from './CreateTweet';

class TweetControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      makeCreateTweetFormVisible: false
    }
  }

  handleClick = () => {
    this.setState(prevsState => ({makeCreateTweetFormVisible: !prevsState.makeCreateTweetFormVisible}));
  }

  render() { 
    let currentlyStateOfCreateTweetFormVisibilaty = null;
    let buttonText = null;
    if (this.state.makeCreateTweetFormVisible) {
      currentlyStateOfCreateTweetFormVisibilaty = <CreateTweet />
      buttonText = "Cancel";
    } else {
      buttonText = "Create a tweet";
    }
    return (  
      <React.Fragment>
        {currentlyStateOfCreateTweetFormVisibilaty}
        <button onClick= {this.handleClick}>{buttonText}</button>
        <hr />
        <ListOfTweets />
    </React.Fragment>
    );
  }
}
 
export default TweetControl;