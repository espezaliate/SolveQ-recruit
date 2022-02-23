import React, { useState } from "react";
import { TimeForm } from "./Form";

export const LastSeenInput = () => {
  const [date, setDate] = useState(new Date());
  const [startCount, setStartCount] = useState(false);

  Math.round(date.valueOf() / 1000);

  return (
    <>
      <div>
        <TimeForm date={date} setDate={setDate} setStartCount={setStartCount} />
      </div>
      {startCount && <div>HELLLOOOOO</div>}
    </>
  );
};
