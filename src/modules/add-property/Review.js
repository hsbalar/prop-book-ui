import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { format } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  divider: {
    padding: '1px',
    margin: theme.spacing(1),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    color: 'green',
  },
}));

export default function Review({ propertyDetails }) {
  const classes = useStyles();
  const { listType, categoryType, propertyType, isNewProperty } =
    propertyDetails;
  const {
    postBy,
    personName,
    personPhone,
    city,
    projectName,
    locality,
    address,
  } = propertyDetails;
  const {
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
  return (
    <>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Basic details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Listing Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{listType || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Category Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{categoryType || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Property Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{propertyType || '-'}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Owner/Broker Details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Post By</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{postBy || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Person Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{personName || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Person Phone</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{personPhone || '-'}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Address
          </Typography>
          <Typography gutterBottom>{address || '-'}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            &nbsp;
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Is Property New ?</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{isNewProperty || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>City</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{city || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Project Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{projectName || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Area/Society</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{locality || '-'}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Property details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Bedrooms</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{bedrooms || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>No Of Floors</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{noOfFloors || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Property Floor No</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{propertyFloorNo || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Is Negotiable ?</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {isNegotiable ? 'Yes' : 'No'}
                </Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Available From</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {availableFrom
                    ? format(new Date(availableFrom), 'dd-MM-yyyy')
                    : '-'}
                </Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            &nbsp;
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Built Up Area</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{builtUpArea || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Carpet Area</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{carpetArea || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Measurement Unit</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{areaUnit || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Price</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{price || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Price Per Unit</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{pricePerUnit || '-'}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Locality/Society</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{locality || '-'}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              More Details
            </Typography>
            <Typography gutterBottom>{about || '-'}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
