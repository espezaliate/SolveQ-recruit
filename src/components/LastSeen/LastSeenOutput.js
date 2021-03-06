import React, { useEffect, useState } from "react";

export const LastSeenOutput = ({ count }) => {
  const [currentTime, setCurrentTime] = useState(Math.floor(new Date() / 1000));
  const timeTracker = () => setCurrentTime(Math.floor(new Date() / 1000));
  let timeElapsed = currentTime - count;
  useEffect(() => {
    setInterval(() => timeTracker(), 1000);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>V1</h1>
      <div>
        {timeElapsed > 0 ? "Time elapsed: " : "Invalid Date"}
        {timeElapsed > 0
          ? timeElapsed < 60
            ? timeElapsed + " seconds ago"
            : Math.floor(timeElapsed / 60) + " minutes ago"
          : null}
      </div>
    </div>
  );
};
