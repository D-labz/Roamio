import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubeSearch = ({ destination }) => {
  const API_KEY = "AIzaSyA6BvF7zJb77DB38lpjohVOo8krz4z9WL8";

  useEffect(() => {
    if (destination) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
            destination
          )}&key=${API_KEY}`
        )
        .then((response) => {
          const videoId =
            response.data.items.length > 0
              ? response.data.items[0].id.videoId
              : "";
          const iframe = document.getElementById("youtube-iframe");
          if (iframe) {
            iframe.src = videoId
              ? `https://www.youtube.com/embed/${videoId}`
              : "";
          }
        })
        .catch(() => {
          const iframe = document.getElementById("youtube-iframe");
          if (iframe) {
            iframe.src = "";
          }
        });
    }
  }, [destination]);

  if (!destination) {
    return <p>Enter a destination to see a video.</p>;
  }

  return (
    <div>
      <iframe
        id="youtube-iframe"
        width="560"
        height="315"
        src=""
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeSearch;
