import { useState, useEffect } from "react";

export const useESTTime = (refreshCycle = 1000) => {
  // Returns the current time
  // and queues re-renders every `refreshCycle` milliseconds (default: 100ms)

  const [now, setNow] = useState(getESTTime());

  useEffect(() => {
    // Regularly set time in state
    // (this will cause your component to re-render frequently)
    const intervalId = setInterval(() => setNow(getESTTime()), refreshCycle);

    // Cleanup interval
    return () => clearInterval(intervalId);

    // Specify dependencies for useEffect
  }, [refreshCycle, setInterval, clearInterval, setNow, getESTTime]);

  return now;
};

export const getESTTime = () => {
  // create a new Date object with the current date and time
  const currentDate = new Date();

  // get the current time in EST timezone
  const estTime = currentDate.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  // convert the EST time string back to a Date object
  return new Date(estTime);
};
