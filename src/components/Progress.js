import React from 'react';
import { LinearProgress, Typography } from '@material-ui/core';
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
      position: 'relative',
      left: '46%',
      fontSize: theme.spacing(8),
      color: '#27AE60',
    },
    mainTitle: {
      display: 'flex',
      justifyContent: 'center',
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
      <>
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
      </>
    );
  }
  return <></>;
};

export const Completed = ({ status, title }) => {
  const classes = useStyles();
  if (status === 'success') {
    return (
      <>
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
      </>
    );
  }
  return <></>;
};
