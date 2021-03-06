import 'date-fns';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { inWords } from '../../state/services/utils';
import { DesktopDatePicker } from '@material-ui/pickers';

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { handleFieldChange } from '../../state/actions/propertyDetails';
import { bedroomsData, unitData } from '../constants';

const useStyles = makeStyles((theme) => ({
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  unitTypesDropdown: {
    fontSize: theme.spacing(1.5),
  },
}));

const notApartment = ['Plot', 'Farm House', 'Land'];

const labelTypes = (type) => {
  if (type === 'Buy')
    return {
      priceLabel: 'Total Budget',
      unitLabel: 'Budget per',
    };
  else if (type === 'Sell')
    return {
      priceLabel: 'Total Price',
      unitLabel: 'Price per',
    };
  else if (type === 'Rent')
    return {
      priceLabel: 'Total Rent',
      unitLabel: 'Rent per',
    };
};

function PropertyDetailsForm({ propertyDetails, handleFieldChange }) {
  const {
    listType,
    propertyType,
    bedrooms,
    noOfFloors,
    propertyFloorNo,
    price,
    pricePerUnit,
    builtUpArea,
    carpetArea,
    areaUnit,
    availableFrom,
    about,
    isNegotiable,
  } = propertyDetails;
  const classes = useStyles();
  const [priceInWords, setPriceInWords] = useState('');
  const [pricePerUnitInWords, setPricePerUnitInWords] = useState('');
  useEffect(() => {
    if (price) setPriceInWords(inWords(price));
  }, [price]);
  useEffect(() => {
    if (pricePerUnit) setPricePerUnitInWords(inWords(pricePerUnit));
  }, [pricePerUnit]);

  const { unitLabel, priceLabel } = labelTypes(listType);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {!notApartment.includes(propertyType) ? (
          <Grid item xs={12}>
            <Typography variant="body1">Bedrooms</Typography>
            <Box className={classes.chip}>
              {bedroomsData.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color={bedrooms === item ? 'primary' : 'default'}
                  deleteIcon={bedrooms === item ? <DoneIcon /> : null}
                  onClick={() => handleFieldChange({ bedrooms: item })}
                />
              ))}
            </Box>
          </Grid>
        ) : (
          <></>
        )}
        {!notApartment.includes(propertyType) ? (
          <>
            <Grid item xs={12} md={6}>
              <TextField
                label="No of Floors"
                value={noOfFloors}
                fullWidth
                onChange={(e) =>
                  handleFieldChange({ noOfFloors: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Property Building/Floor No."
                fullWidth
                value={propertyFloorNo}
                onChange={(e) =>
                  handleFieldChange({ propertyFloorNo: e.target.value })
                }
              />
            </Grid>
          </>
        ) : (
          <></>
        )}
        <Grid item xs={12} md={4}>
          <TextField
            label="Built-up Area"
            value={builtUpArea}
            fullWidth
            type="number"
            placeholder="Total area"
            onChange={(e) => handleFieldChange({ builtUpArea: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Carpet Area"
            fullWidth
            type="number"
            value={carpetArea}
            onChange={(e) => handleFieldChange({ carpetArea: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel className={classes.unitTypesDropdown}>
            Area Unit Type
          </InputLabel>
          <Select
            labelId="unit list"
            id="unit-list"
            value={areaUnit}
            fullWidth
            label="Area Unit Type"
            onChange={(e) => handleFieldChange({ areaUnit: e.target.value })}
          >
            {unitData.map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={`${priceLabel}`}
            fullWidth
            value={price}
            type="number"
            helperText={priceInWords ? priceInWords : ''}
            onChange={(e) => handleFieldChange({ price: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {listType !== 'Rent' && (
            <TextField
              label={`${unitLabel} / ${areaUnit}`}
              fullWidth
              value={pricePerUnit}
              type="number"
              helperText={pricePerUnitInWords ? pricePerUnitInWords : ''}
              onChange={(e) =>
                handleFieldChange({ pricePerUnit: e.target.value })
              }
            />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={isNegotiable}
                  onChange={(e) =>
                    handleFieldChange({ isNegotiable: e.target.checked })
                  }
                  name="checkedA"
                />
              }
              label="Is Price Negotiable"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <DesktopDatePicker
            disableToolbar
            variant="inline"
            id="date-picker-inline"
            label="Available From"
            fullWidth
            value={availableFrom ? new Date(availableFrom) : null}
            renderInput={(props) => <TextField {...props} helperText="" />}
            onChange={(value) =>
              handleFieldChange({
                availableFrom: value.toString(),
              })
            }
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="About"
            fullWidth
            value={about}
            multiline
            rows={4}
            onChange={(e) => handleFieldChange({ about: e.target.value })}
          />
        </Grid>
        <Divider />
      </Grid>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { propertyDetails } = state.propertyDetails;
  return { propertyDetails };
}

export default connect(mapStateToProps, { handleFieldChange })(
  PropertyDetailsForm
);
