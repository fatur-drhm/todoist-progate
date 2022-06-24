import React, { useState, useEffect, useRef } from "react";
import { IoAdd } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";

function Form(props) {
  const [open, setOpen] = useState(false);
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
    <form onSubmit={handleSubmit} className="form">
      {props.edit ? (
        <>
          <input placeholder="Update your item" value={input} onChange={handleChange} name="text" ref={inputRef} className="form-input edit" />
          <button onClick={handleSubmit} className="form-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <h2 className={`${open ? "" : "icon-hide"}`}>What's Your Plan Today?</h2>
          <input placeholder="Add a todo" value={input} onChange={handleChange} name="text" className={`${open ? "form-input" : "icon-hide"}`} ref={inputRef} />
          <button onClick={handleSubmit} className={`${open ? "form-button" : "icon-hide"}`}>
            Add todo
          </button>
          <div className="container-tambah">
            <button onClick={() => setOpen(!open)} className="btn-tambah">
              <IoAdd className={!open ? "icon-tambah" : "icon-hide"} />
              <VscClose className={open ? "icon-tambah" : "icon-hide"} />
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default Form;
