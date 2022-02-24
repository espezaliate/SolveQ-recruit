import React from "react";
import styled from "styled-components";

const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const TimeForm = ({ date, setDate, setStartCount }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const year = formData.get("year");
    const month = formData.get("month") - 1;
    const day = formData.get("day");
    const hour = formData.get("hour");
    const minutes = formData.get("minutes");
    const seconds = formData.get("seconds");
    try {
      setDate(new Date(year, month, day, hour, minutes, seconds));
    } catch {
      throw new Error("Invalid Date");
    }
    setStartCount(true);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="year">Year</label>
        <input name="year" defaultValue={date.getFullYear()} />
      </InputContainer>
      <InputContainer>
        <label htmlFor="month">Month</label>
        <input name="month" defaultValue={date.getMonth() + 1} />
      </InputContainer>
      <InputContainer>
        <label htmlFor="day">Day</label>
        <input name="day" defaultValue={date.getDate()} />
      </InputContainer>
      <InputContainer>
        <label htmlFor="hour">Hour (24hours)</label>
        <input name="hour" defaultValue={date.getHours()} />
      </InputContainer>
      <InputContainer>
        <label htmlFor="minutes">Minutes</label>
        <input name="minutes" defaultValue={date.getMinutes()} />
      </InputContainer>
      <InputContainer>
        <label htmlFor="seconds">Seconds</label>
        <input name="seconds" defaultValue={date.getSeconds()} />
      </InputContainer>
      <InputContainer>
        <button type="submit">Submit</button>
      </InputContainer>
    </FormContainer>
  );
};
