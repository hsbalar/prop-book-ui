import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}));

export default function Page404() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <main>
        <Box className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Page Not Found
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
            <Box className={classes.heroButtons}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/')}
              >
                Go to Home
              </Button>
            </Box>
          </Container>
        </Box>
      </main>
    </React.Fragment>
  );
}
