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
      {status === "sending" && <div className="sending">sending...</div>}
      {status === "error" && <div className="error">You are already Subscribed</div>}
      {status === "success" && <div className="success">{message}</div>}
    </div>
  );
};

export default SimpleForm;
