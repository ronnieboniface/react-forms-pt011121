import Fweet from "./Fweet";
import "../assets/styles/list.css";

const FweetList = ({ fweets }) => {
  // const fweetsReversed = fweets.reverse();
  const renderFweets = () => {
    if (fweets && fweets.length !== 0) {
      return fweets.map((fweet) => (
        <Fweet fweetObj={fweet} key={fweet.username} />
      ));
    } else {
      return <p className="sorry">Sorry, there are no fweets yet...</p>;
    }
  };

  return (
    <div className="list">
      <h1>
        FweetFeed &nbsp;
        <i className="fas fa-dove"></i>
      </h1>

      {renderFweets()}
    </div>
  );
};

export default FweetList;
