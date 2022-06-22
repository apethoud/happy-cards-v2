export default function LabeledTextInput({ name, value, setValue, inputType }) {
  return (
    <div className="Form-InputWrapper">
      <label htmlFor={name} className="Label">
        {name}
      </label>
      <input
        name={name}
        type={inputType || "text"}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="Input"
      />
    </div>
  );
}
