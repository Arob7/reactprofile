import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span className="icon">
        <button i class="fas fa-heart" onClick={() => setCount(count + 1)}>
          {count}
        </button>
      </span>
    </>
  );
}

export default Counter;
