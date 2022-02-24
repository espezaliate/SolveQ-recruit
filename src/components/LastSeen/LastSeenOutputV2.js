import React, { useEffect, useState } from "react";

export const LastSeenOutputV2 = ({ count }) => {
  const [currentTime, setCurrentTime] = useState(Math.floor(new Date() / 1000));
  let timeElapsed = currentTime - count;

  const timeTracker = () => setCurrentTime(Math.floor(new Date() / 1000));

  useEffect(() => {
    if (timeElapsed < 60) {
      setInterval(() => timeTracker(), 1000);
    }
    setTimeout(() => {
      timeTracker();
      setInterval(() => timeTracker(), 60000);
    }, (timeElapsed / 60 - Math.floor(timeElapsed / 60)) * 6000);
  }, [timeElapsed]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>V2</h1>
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
