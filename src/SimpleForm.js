import React from "react";

// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className={className} style={style}>
      <input ref={node => (input = node)} type="email" placeholder="Your email" />
      <button onClick={submit}>Submit</button>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && <div style={{ color: "red" }}>You are already Subscribed</div>}
      {status === "success" && <div style={{ color: "green" }}>{message}</div>}
    </div>
  );
};

export default SimpleForm;
