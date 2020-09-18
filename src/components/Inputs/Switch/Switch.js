import { Controller } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { Switch as MuiSwitch, FormControlLabel } from "@material-ui/core";

const Switch = (props) => {
  const { label, name } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={(prop) => (
        <FormControlLabel control={<MuiSwitch {...prop} />} label={label} />
      )}
    />
  );
};

export default Switch;
