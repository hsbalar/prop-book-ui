import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as actions from '../state/actions/propertyDetails';
import * as filterActions from '../state/actions/filters';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  heroButtons: {
    textAlign: 'center',
    marginTop: '16px',
  },
}));

const Home = ({ metrix, getMetrix, filterChange }) => {
  const classes = useStyles();
  const history = useHistory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getMetrix(), []);

  const action = (type) => {
    filterChange(type);
    history.push('/properties');
  };

  const list = [
    {
      title: 'Total Buyers',
      key: 'buy',
      count: metrix.buy,
      clickHandler: () => action('Buy'),
    },
    {
      title: 'Total Sellers',
      key: 'sell',
      count: metrix.sell,
      clickHandler: () => action('Sell'),
    },
    {
      title: 'Total Rental',
      key: 'rent',
      count: metrix.rent,
      clickHandler: () => action('Rent'),
    },
  ];

  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Dashboard
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Overall enquiries from Buyers, Sellers & on Rental
        </Typography>
        <Box className={classes.heroButtons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/add-property-details')}
          >
            Add New Property
          </Button>
        </Box>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {list.map((el) => (
            <Grid key={el.key} item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={el.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={<StarIcon />}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Box className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {el.count}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={el.clickHandler}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  const { metrix } = state.propertyDetails;
  return { metrix };
}

export default connect(mapStateToProps, {
  getMetrix: actions.getMetrix,
  filterChange: filterActions.handleFilterTypeChange,
})(Home);
