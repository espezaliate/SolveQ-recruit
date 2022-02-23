import React, { useEffect, useState } from "react";

export const LastSeenOutput = ({ count }) => {
  const [currentTime, setCurrentTime] = useState(Math.floor(new Date() / 1000));

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(Math.floor(new Date() / 1000));
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        Time elapsed:{" "}
        {currentTime - count < 30
          ? currentTime - count + " seconds"
          : currentTime - count < 60
          ? 30 + " seconds"
          : Math.floor((currentTime - count) / 60) + " minutes"}
      </div>
    </div>
  );
};
