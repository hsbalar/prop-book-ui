import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { connect } from 'react-redux';
import { handleFieldChange } from '../../state/actions/propertyDetails';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function AddressForm({ propertyDetails, handleFieldChange }) {
  const classes = useStyles();
  const { listType } = propertyDetails;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            List Property For
          </Typography>
          <Box className={classes.root}>
            <Chip
              label="BUY"
              color={listType === 'buy' ? 'primary' : 'default'}
              deleteIcon={listType === 'buy' ? <DoneIcon /> : null}
              onClick={() => {
                handleFieldChange({ listType: 'buy' });
              }}
            />
            <Chip
              label="SELL"
              deleteIcon={listType === 'sell' ? <DoneIcon /> : null}
              color={listType === 'sell' ? 'primary' : 'default'}
              onClick={() => {
                handleFieldChange({ listType: 'sell' });
              }}
            />
            <Chip
              label="RENT"
              deleteIcon={listType === 'rent' ? <DoneIcon /> : null}
              color={listType === 'rent' ? 'primary' : 'default'}
              onClick={() => {
                handleFieldChange({ listType: 'rent' });
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { propertyDetails } = state.propertyDetails;
  return { propertyDetails };
}

export default connect(mapStateToProps, { handleFieldChange })(AddressForm);
