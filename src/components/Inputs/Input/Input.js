import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core/";
import { useFormContext } from "react-hook-form";

const Input = (props) => {
  const { control } = useFormContext();
  console.log(props);
  return (
    <Controller
      as={TextField}
      control={control}
      variant="outlined"
      margin="dense"
      fullWidth
      {...props}
    />
  );
};
export default Input;
