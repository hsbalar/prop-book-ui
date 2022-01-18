import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import CustomizedBreadcrumbs from '../../components/Breadcrumb';
import Filters from './Filters';
import ResultGrid from './ResultGrid';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const AdvanceSearch = (props) => {
  const classes = useStyles();

  return (
    <>
      <CustomizedBreadcrumbs currentPage={'Advance Search'} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Filters />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <ResultGrid />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AdvanceSearch;
