import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
  const word = useRef("");
  const navigate = useNavigate();

  return (
    <>
      <input className="py-2 px-4 border rounded-sm" type="text" ref={word} />
      <button
        className="py-2 px-4 border rounded-sm"
        onClick={() => {
          navigate("/definition/" + word.current.value);
        }}
      >
        Search
      </button>
    </>
  );
}
