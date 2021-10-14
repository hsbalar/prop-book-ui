import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldInput = ({ name, label, value, handleChange }) => (
  <TextField
    label={label}
    value={value}
    fullWidth
    onChange={(e) => handleChange({ name, value: e.target.value })}
  />
);
