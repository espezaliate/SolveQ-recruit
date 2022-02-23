import React, { useState } from "react";
import { TimeForm } from "./Form";
import { LastSeenOutput } from "./LastSeenOutput";

export const LastSeen = () => {
  const [date, setDate] = useState(new Date());
  const [startCount, setStartCount] = useState(false);

  let count = Math.round(date.valueOf() / 1000);

  return (
    <>
      <div>
        <TimeForm date={date} setDate={setDate} setStartCount={setStartCount} />
      </div>
      {startCount && <LastSeenOutput count={count} />}
    </>
  );
};
