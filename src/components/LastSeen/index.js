import React, { useState } from "react";
import { TimeForm } from "./Form";
import { LastSeenOutput } from "./LastSeenOutput";
import { LastSeenOutputV2 } from "./LastSeenOutputV2";
import styled from "styled-components";

const FormWrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 25%;
  margin-top: -10%;
`;

export const LastSeen = () => {
  const [date, setDate] = useState(new Date());
  const [startCount, setStartCount] = useState(false);

  let count = Math.round(date.valueOf() / 1000);

  return (
    <>
      <FormWrapper>
        <TimeForm date={date} setDate={setDate} setStartCount={setStartCount} />
      </FormWrapper>
      <CounterWrapper>
        {startCount && <LastSeenOutput count={count} />}
        {startCount && <LastSeenOutputV2 count={count} />}
      </CounterWrapper>
    </>
  );
};
