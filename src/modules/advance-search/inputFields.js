import React from 'react';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { DateRangePicker, DateRangeDelimiter } from '@material-ui/pickers';

import {
  postByData,
  bedroomsData,
  categoryData,
  propertyTypeData,
} from '../constants';

const chipsOptionsData = {
  postBy: postByData,
  bedrooms: bedroomsData,
  categoryType: categoryData,
  propertyType: [
    ...propertyTypeData.Residential,
    'Apartment',
    'Office',
    'Shop',
    'Complex',
    'Land',
  ],
};

const useStyles = makeStyles((theme) => ({
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  unitTypesDropdown: {
    fontSize: theme.spacing(1.5),
  },
}));

const TextFieldInput = ({ name, label, value, handleChange }) => (
  <TextField
    label={label}
    value={value}
    fullWidth
    onChange={(e) => handleChange(name, e.target.value)}
  />
);

const ChipsSelection = ({ name, label, value, handleChange }) => {
  const classes = useStyles();
  return (
    <Box className={classes.chip}>
      {chipsOptionsData[name].map((item) => (
        <Chip
          key={item}
          label={item}
          color={value === item ? 'primary' : 'default'}
          deleteIcon={value === item ? <DoneIcon /> : null}
          onClick={() => handleChange(name, item)}
        />
      ))}
    </Box>
  );
};

const RangeSelection = ({ name, label, value, handleChange }) => {
  return (
    <>
      <Box style={{ display: 'block', width: '100%' }}>
        <Typography>
          {value[0]} - {value[1]}
        </Typography>
        <Slider
          value={value}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          onChange={(e, newValue) => handleChange(name, newValue)}
        />
      </Box>
    </>
  );
};

const BasicDateRangePicker = ({ name, label, value, handleChange }) => {
  return (
    <DateRangePicker
      startText="Start"
      endText="End"
      value={value}
      onChange={(newValue) => handleChange(name, newValue)}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <DateRangeDelimiter> to </DateRangeDelimiter>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />
  );
};

export { TextFieldInput, ChipsSelection, RangeSelection, BasicDateRangePicker };
