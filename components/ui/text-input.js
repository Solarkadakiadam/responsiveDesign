import classes from "./text-input.module.css";

function TextInput(props) {
  return (
    <div className={classes.form}>
      <input
        name={props.name || "name"}
        id={props.id}
        type={props.type || "input"}
        placeholder={props.placeholder}
        {...props}
      />
      <label htmlFor={props.id}>{props.placeholder || "title"}</label>
    </div>
  );
}

export default TextInput;
