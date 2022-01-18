import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import * as filterActions from '../../state/actions/filters';

const useStyles = makeStyles((theme) => ({
  actions: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  grid: {
    flexGrow: 1,
  },
}));

const ResultGrid = ({ filterResult, applyFilter }) => {
  const classes = useStyles();
  console.log(filterResult);
  useEffect(() => applyFilter(), []);
  return (
    <>
      <Box className={classes.actions}>
        <Button>Clear</Button>
        <Button color="primary" onClick={() => applyFilter()}>
          Apply
        </Button>
      </Box>
      <Box className={classes.grid}>
        <Grid container spacing={2}>
          {filterResult.map((row) => (
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    title={row.personName}
                    subheader={row.projectName}
                  />
                  <CardContent style={{ paddingTop: 0 }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

function mapStateToProps(state) {
  const { filterResult } = state.filters;

  return { filterResult };
}

export default connect(mapStateToProps, {
  applyFilter: filterActions.applyAdvanceFilter,
})(ResultGrid);
