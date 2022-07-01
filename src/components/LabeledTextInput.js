import FormFieldHelp from "./FormFieldHelp";
import { Label, Input } from "./StyledComponents";

export default function LabeledTextInput({ name, value, setValue, inputType }) {
  return (
    <div className="Form-InputWrapper">
      <div style={{ display: "flex" }}>
        <Label htmlFor={name}>{name}</Label>
        <FormFieldHelp />
      </div>
      <Input
        name={name}
        type={inputType || "text"}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
