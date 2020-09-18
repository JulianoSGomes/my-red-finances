import React from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePicker = ({
  format,
  name,
  label,
  variant,
  margin,
  initialValues,
  inputProps,
  inputVariant,
  type,
  views,
  ...rest
}) => {
  const { control, watch, setValue } = useFormContext();

  return (
    <Controller
      as={KeyboardDatePicker}
      control={control}
      name={name}
      label={label}
      value={watch(name)}
      defaultValue={initialValues}
      onChange={(date) => {
        setValue(name, date);
        return { value: date };
      }}
      format={format}
      autoOk
      views={views}
      onError={() => "asdasd"}
      InputAdornmentProps={{ position: "end" }}
      fullWidth
      margin={margin}
      variant={variant}
      inputVariant={inputVariant}
      {...rest}
    />
  );
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  rest: PropTypes.any,
  margin: PropTypes.string,
  variant: PropTypes.string,
  inputVariant: PropTypes.string,
  initialValues: PropTypes.shape(),
  inputProps: PropTypes.shape(),
  format: PropTypes.string,
  views: PropTypes.arrayOf(PropTypes.string),
};

DatePicker.defaultProps = {
  label: null,
  margin: "dense",
  variant: "inline",
  inputVariant: "outlined",
  initialValues: null,
  inputProps: {},
  format: "dd/MM/yyyy",
  views: ["year", "month", "date"],
};

export default DatePicker;
