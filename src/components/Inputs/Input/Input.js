import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core/";
import { useFormContext } from "react-hook-form";

const Input = (props) => {
  const { control } = useFormContext();
  return (
    <Controller
      as={TextField}
      control={control}
      variant="outlined"
      margin="dense"
      fullWidth
      onChange={(value) => {
        setValue(name, value);
        return { value: value };
      }}
      {...props}
    />
  );
};
export default Input;
