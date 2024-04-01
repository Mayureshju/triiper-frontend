import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

function CustomRadio(props) {
  const { value, label } = props;

  return (
    <StyledFormControlLabel
      value={value}
      label={label}
      control={<Radio />}
    />
  );
}



export default CustomRadio;
