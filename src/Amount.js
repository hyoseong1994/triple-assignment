import React, { useEffect, useCallback } from "react";

const Amount = ({ num, name, unit, note }) => {
  const counter = useCallback(($counter, max) => {
    let now = max;
    const percent = [25, 20, 17, 11, 9, 7, 5, 3, 2, 1];
    let i = 0;
    const handle = setInterval(() => {
      if (now <= 0) {
        clearInterval(handle);
      }
      $counter.innerHTML = Math.min(max, Math.round(max - now));
      const step = Math.round(max * (percent[i] / 100));
      now -= step;
      i++;
    }, 200);
  }, []);

  useEffect(() => {
    const $counter = document.querySelector(`#${name}`);
    counter($counter, num);
  }, [counter, num, name]);

  return (
    <p>
      <strong>
        <span id={name}>0</span>
        {unit}
      </strong>
      {note}
    </p>
  );
};

export default Amount;
