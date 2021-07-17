import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { handleFieldChange } from '../../state/actions/propertyDetails';
import { citiesData, postByData } from '../constants';

const useStyles = makeStyles((theme) => ({
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function LocationDetailsForm({ propertyDetails, handleFieldChange }) {
  const {
    postBy,
    personName,
    personPhone,
    city,
    projectName,
    locality,
    address,
  } = propertyDetails;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body1">Post By</Typography>
          <Box className={classes.chip}>
            {postByData.map((item) => (
              <Chip
                key={item}
                label={item}
                color={postBy === item ? 'primary' : 'default'}
                deleteIcon={postBy === item ? <DoneIcon /> : null}
                onClick={() => handleFieldChange({ postBy: item })}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Person Name"
            value={personName}
            fullWidth
            onChange={(e) => handleFieldChange({ personName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Person Phone No"
            fullWidth
            value={personPhone}
            onChange={(e) => handleFieldChange({ personPhone: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box style={{ marginBottom: '16px' }}>
            <Typography variant="h6">Property Location</Typography>
          </Box>
          <Autocomplete
            id="city-dropdown"
            options={citiesData}
            value={city}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Select City" />
            )}
            onChange={(e, newValue) => handleFieldChange({ city: newValue })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Project Name"
            fullWidth
            value={projectName}
            onChange={(e) => handleFieldChange({ projectName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Area / Society"
            fullWidth
            value={locality}
            onChange={(e) => handleFieldChange({ locality: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            label="Property Address"
            fullWidth
            value={address}
            multiline
            rows={4}
            onChange={(e) => handleFieldChange({ address: e.target.value })}
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

export default connect(mapStateToProps, { handleFieldChange })(
  LocationDetailsForm
);
