import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Select = (props) => {
  const { name, label, initialValues, ...rest } = props;
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={initialValues}
      render={(prop) => (
        <Autocomplete
          autoComplete
          onChange={(_, data) => prop.onChange(data)}
          autoHighlight
          fullWidth
          autoSelect
          getOptionSelected={(option, value) => option === value}
          {...rest}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                margin="dense"
                variant="outlined"
                label={label}
              />
            );
          }}
        />
      )}
    />
  );
};
export default Select;
