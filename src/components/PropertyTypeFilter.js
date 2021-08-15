import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Paper from '@material-ui/core/Paper';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { connect } from 'react-redux';

import * as actions from '../state/actions/filters';

function PropertyTypeFilter({ listType, handleFilterTypeChange }) {
  return (
    <Paper style={{ marginTop: '16px' }}>
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
          style={{ backgroundColor: listType === 'Buy' ? '#abbcec47' : '' }}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Find Sellers"
          value="Sell"
          style={{ backgroundColor: listType === 'Sell' ? '#abbcec47' : '' }}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Find on Rent"
          value="Rent"
          style={{ backgroundColor: listType === 'Rent' ? '#abbcec47' : '' }}
          icon={<LocationOnIcon />}
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
