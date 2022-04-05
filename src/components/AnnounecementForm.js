import React, { useState, useEffect, useRef } from "react";

function AnnounecementForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="ann-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="ann-input edit"
          />
          <button onClick={handleSubmit} className="ann-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder=" Add an announcement"
            value={input}
            onChange={handleChange}
            name="text"
            className="ann-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="ann-button">
            Add an announcement
          </button>
        </>
      )}
    </form>
  );
}

export default AnnounecementForm;
