import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BasicDetailsForm from './BasicDetailsForm';
import LocationDetailsForm from './LocationDetailsForm';
import PropertyDetailsForm from './PropertyDetailsForm';
import Review from './Review';
import * as actions from '../../state/actions/propertyDetails';
import { Progress, Completed } from '../../components/Progress';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const steps = [
  'Basic Details',
  'Owner & Location',
  'Property Details',
  'Review',
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicDetailsForm />;
    case 1:
      return <LocationDetailsForm />;
    case 2:
      return <PropertyDetailsForm />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export function AddPropertyDetails({
  status,
  saveProperty,
  handleStatusChange,
}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === 3) {
      handleStatusChange('progress');
      saveProperty();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          component={RouterLink}
          to={'/'}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          Home
        </Link>
        <Typography color="textPrimary" className={classes.link}>
          <ReceiptIcon className={classes.icon} />
          Add Buyer Details
        </Typography>
      </Breadcrumbs>
      <Box className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">
            Add New Property Details
          </Typography>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Progress status={status} title={'Saving property details'} />
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Save Details' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Box>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { propertyDetails } = state.propertyDetails;
  return { propertyDetails, status: state.status };
}

export default connect(mapStateToProps, {
  saveProperty: actions.saveProperty,
  handleStatusChange: actions.handleStatusChange,
})(AddPropertyDetails);
