import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyApi";

function SpotifyPlayer(props) {
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
    });
  }, []);

  const trackInfoStyle = {
    width: "70%",
    float: "left",
    display: "block",
  };

  const trackTitleStyle = {
    fontSize: "14px",
    textAlign: "left",
    textDecoration: "none",
    verticalAlign: "middle",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const oddLinkStyle = {
    color: "black",
    fontWeight: "bold",
    verticalAlign: "middle",
    lineHeight: "15px",
    letterSpacing: "0.2px",
    padding: "10% 0 0 5%",
  };

  const evenLinkStyle = {
    color: "gray",
    fontSize: "12px",
    letterSpacing: "0.1px",
    padding: "5% 0 0 5%",
  };

  return result.isPlaying ? (
    <div className="nowplayingcard">
      <div className="nowplayingcontainer-inner">
        <img
          id="trackart"
          src={result.albumImageUrl}
          style={{
            maxWidth: "30%",
            float: "left",
            left: "0",
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
            // Add other image styles here...
          }}
        ></img>
        <div className="trackInfo" style={trackInfoStyle}>
          <a id="tracktitle" style={trackTitleStyle}>
            {result.title}
          </a>
          <a href="#" id="trackartist" style={oddLinkStyle}>
            {result.artist}
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div>Not playing</div>
  );
}

export default SpotifyPlayer;
