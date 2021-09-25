import React from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    progress: {
      padding: theme.spacing(0.04),
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(15),
      marginRight: theme.spacing(15),
      marginBottom: theme.spacing(5),
    },
    circleCheck: {
      display: 'block',
      margin: 'auto',
      fontSize: theme.spacing(8),
      color: '#27AE60',
    },
    mainTitle: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
      fontWeight: 600,
    },
    subTitle: {
      display: 'flex',
      justifyContent: 'center',
    },
  });
});

export const Progress = ({ status, title }) => {
  const classes = useStyles();
  if (status === 'progress') {
    return (
      <Box>
        <LinearProgress className={classes.progress} />
        <Typography className={classes.mainTitle} variant="h6">
          {title}
        </Typography>
        <Typography
          variant="body1"
          className={classes.subTitle}
          gutterBottom
          component="div"
        ></Typography>
      </Box>
    );
  }
  return <></>;
};

export const Completed = ({ status, title }) => {
  const classes = useStyles();
  if (status === 'success') {
    return (
      <Box>
        <CheckCircleIcon className={classes.circleCheck} />
        <Typography className={classes.mainTitle} variant="h6">
          {title}
        </Typography>
        <Typography
          variant="body1"
          className={classes.subTitle}
          gutterBottom
          component="div"
        ></Typography>
      </Box>
    );
  }
  return <></>;
};
