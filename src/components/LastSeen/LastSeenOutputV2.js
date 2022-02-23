import React, { useEffect, useState } from "react";

export const LastSeenOutputV2 = ({ count }) => {
  const [currentTime, setCurrentTime] = useState(Math.floor(new Date() / 1000));
  const timeTracker = () => setCurrentTime(Math.floor(new Date() / 1000));
  let timeElapsed = currentTime - count;
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
      <div>
        Time elapsed:{" "}
        {timeElapsed < 60
          ? timeElapsed + " seconds ago"
          : Math.floor(timeElapsed / 60) + " minutes ago"}
      </div>
    </div>
  );
};
