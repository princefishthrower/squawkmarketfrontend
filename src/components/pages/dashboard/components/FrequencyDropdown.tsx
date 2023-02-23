import * as React from "react";
import { useState } from "react";

export function FrequencyDropdown() {
  const [isShown, setIsShown] = useState(false);
  const expanded = isShown ? "true" : "false";
  const showClass = isShown ? "show" : "";
  return (
    <div className={`ms-auto me-3 dropdown ${showClass}`}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded={expanded}
        onClick={() => setIsShown(!isShown)}
      >
        Frequency
      </button>
      <ul
        className={`dropdown-menu ${showClass}`}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <button className="dropdown-item">Real-time</button>
        </li>
        <li>
          <button className="dropdown-item">Every 1 minute</button>
        </li>
        <li>
          <button className="dropdown-item">Every 5 minutes</button>
        </li>
        <li>
          <button className="dropdown-item">Every 10 minutes</button>
        </li>
        <li>
          <button className="dropdown-item">Every 30 minutes</button>
        </li>
        <li>
          <button className="dropdown-item">Every hour</button>
        </li>
      </ul>
    </div>
  );
}
