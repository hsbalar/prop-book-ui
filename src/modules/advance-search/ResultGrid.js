import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import SearchIcon from '@material-ui/icons/Search';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import FullScreenDialog from '../all-property/FullScreenDialog';
import { getFormattedDate } from '../../state/services/utils';

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
  },
  title: {
    fontSize: theme.spacing(2),
  },
  subTitle: {
    fontSize: theme.spacing(1.8),
  },
  card: {
    minHeight: theme.spacing(20),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: theme.spacing(0.5),
  },
  createdDate: {
    position: 'absolute',
    right: theme.spacing(1),
    bottom: theme.spacing(0.3),
  },
  localityLabel: {
    position: 'absolute',
    color: '#3f51b5',
    left: theme.spacing(2),
    bottom: theme.spacing(0.5),
  },
  emptyResult: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px',
  },
}));

const ResultGrid = ({ filterResult }) => {
  const classes = useStyles();

  const [currentDetails, setCurrentDetails] = useState(null);
  const [openFullScreenDialog, setOpenFullScreenDialog] = useState(false);

  const viewRowDetails = (item) => {
    setCurrentDetails(item);
    setOpenFullScreenDialog(true);
  };

  return (
    <>
      <Box className={classes.grid}>
        <Grid container spacing={2}>
          {filterResult.map((row) => (
            <Grid item xs={6} sm={4} key={row._id}>
              <CardActionArea onClick={() => viewRowDetails(row)}>
                <Card className={classes.card}>
                  <CardContent>
                    <Box>
                      <Typography variant="h6" className={classes.title}>
                        {row.personName}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        className={classes.subTitle}
                      >
                        {row.projectName}
                      </Typography>
                    </Box>
                    <Divider className={classes.divider} />
                    <Typography
                      variant="body2"
                      component="p"
                      className={classes.content}
                    >
                      {`${row.about}`}
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      className={classes.localityLabel}
                    >
                      {row.locality}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="caption"
                      display="block"
                      className={classes.createdDate}
                    >
                      {getFormattedDate(row.createdAt, 'dd-MM-yyyy')}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
        {filterResult.length === 0 && (
          <Box className={classes.emptyResult}>
            <SearchIcon fontSize="large" />
            {'  '}
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="textPrimary"
            >
              No Records Found...
            </Typography>
          </Box>
        )}
      </Box>
      <FullScreenDialog
        open={openFullScreenDialog}
        propertyDetails={currentDetails}
        handleClose={() => setOpenFullScreenDialog(false)}
      />
    </>
  );
};

function mapStateToProps(state) {
  const { filterResult } = state.filters;
  return { filterResult };
}

export default connect(mapStateToProps)(ResultGrid);
