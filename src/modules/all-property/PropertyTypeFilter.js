import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Paper from '@material-ui/core/Paper';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import StoreIcon from '@material-ui/icons/Store';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import clsx from 'clsx';

import * as actions from '../../state/actions/filters';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  active: {
    backgroundColor: '#abbcec47',
  },
}));

function PropertyTypeFilter({ listType, handleFilterTypeChange }) {
  const { container, active } = useStyles();
  return (
    <Paper className={container}>
      <BottomNavigation
        value={listType}
        onChange={(event, newValue) => {
          handleFilterTypeChange(newValue);
        }}
        style={{ backgroundColor: 'initial' }}
        showLabels
      >
        <BottomNavigationAction
          label="Find Buyers"
          value="Buy"
          className={clsx(listType === 'Buy' && active)}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Find Sellers"
          value="Sell"
          className={clsx(listType === 'Sell' && active)}
          icon={<HomeWorkIcon />}
        />
        <BottomNavigationAction
          label="Find on Rent"
          value="Rent"
          className={clsx(listType === 'Rent' && active)}
          icon={<StoreIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export const mapStateToProps = (state) => {
  const { listType } = state.filters;
  return { listType };
};

const ConnectPropertyTypeFilter = connect(mapStateToProps, {
  handleFilterTypeChange: actions.handleFilterTypeChange,
})(PropertyTypeFilter);

export default ConnectPropertyTypeFilter;
