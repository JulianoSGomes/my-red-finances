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
      render={({ value, onChange }) => (
        <FormControlLabel
          label={label}
          control={
            <MuiSwitch
              onChange={(e) => onChange(e.target.checked)}
              checked={!!value}
              color="primary"
            />
          }
        />
      )}
    />
  );
};

export default Switch;
