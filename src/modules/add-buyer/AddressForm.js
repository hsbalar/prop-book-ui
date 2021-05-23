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
import {
  propertyTypeData,
  listData,
  categoryData,
  isNewPropertyData,
} from './constants';
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
  const { listType, categoryType, propertyType, isNewProperty } =
    propertyDetails;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            List Property For
          </Typography>
          <Box className={classes.root}>
            {listData.map((item) => (
              <Chip
                key={item}
                label={item}
                color={listType === item ? 'primary' : 'default'}
                deleteIcon={listType === item ? <DoneIcon /> : null}
                onClick={() => {
                  handleFieldChange({ listType: item });
                }}
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            Category
          </Typography>
          <Box className={classes.root}>
            {categoryData.map((item) => (
              <Chip
                key={item}
                label={item}
                color={categoryType === item ? 'primary' : 'default'}
                deleteIcon={categoryType === item ? <DoneIcon /> : null}
                onClick={() => {
                  handleFieldChange({ categoryType: item });
                }}
              />
            ))}
          </Box>
        </Grid>
        {categoryType && (
          <Grid item xs={12}>
            <Typography gutterBottom variant="body1">
              Property Type
            </Typography>
            <Box className={classes.root}>
              {propertyTypeData[categoryType].map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color={propertyType === item ? 'primary' : 'default'}
                  deleteIcon={propertyType === item ? <DoneIcon /> : null}
                  onClick={() => {
                    handleFieldChange({ propertyType: item });
                  }}
                />
              ))}
            </Box>
          </Grid>
        )}

        {['Buy', 'Sell'].includes(listType) && (
          <Grid item xs={12}>
            <Typography gutterBottom variant="body1">
              Available For
            </Typography>
            <Box className={classes.root}>
              {isNewPropertyData.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color={isNewProperty === item ? 'primary' : 'default'}
                  deleteIcon={isNewProperty === item ? <DoneIcon /> : null}
                  onClick={() => {
                    handleFieldChange({ isNewProperty: item });
                  }}
                />
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { propertyDetails } = state.propertyDetails;
  return { propertyDetails };
}

export default connect(mapStateToProps, { handleFieldChange })(AddressForm);
