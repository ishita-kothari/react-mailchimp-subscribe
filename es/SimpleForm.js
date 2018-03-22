import React from "react";

// a basic form
var SimpleForm = function SimpleForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      className = _ref.className,
      style = _ref.style,
      onSubmitted = _ref.onSubmitted;

  var input = void 0;
  var submit = function submit() {
    return input && input.value.indexOf("@") > -1 && onSubmitted({
      EMAIL: input.value
    });
  };

  return React.createElement(
    "div",
    { className: className, style: style },
    React.createElement("input", { ref: function ref(node) {
        return input = node;
      }, type: "email", placeholder: "Your email" }),
    React.createElement(
      "button",
      { onClick: submit },
      "Submit"
    ),
    status === "sending" && React.createElement(
      "div",
      { className: "sending" },
      "sending..."
    ),
    status === "error" && React.createElement(
      "div",
      { className: "error" },
      "You are already Subscribed"
    ),
    status === "success" && React.createElement(
      "div",
      { className: "success" },
      message
    )
  );
};

export default SimpleForm;