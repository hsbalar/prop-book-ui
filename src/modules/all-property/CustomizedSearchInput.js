import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';

import * as actions from '../../state/actions/filters';
import * as propertyActions from '../../state/actions/propertyDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 600,
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function CustomizedSearchInput({
  inputSearch,
  handleFilterChange,
  getProperty,
  applyFilter,
}) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        value={inputSearch}
        onChange={(e) => handleFilterChange(e.target.value)}
        placeholder="Search by Property, Project, Area, Person, City"
        inputProps={{ 'aria-label': 'search' }}
      />
      {inputSearch && (
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={(e) => {
            handleFilterChange('');
            getProperty();
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="button"
        color="primary"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => inputSearch.trim() && applyFilter()}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

function mapStateToProps(state) {
  const { inputSearch } = state.filters;

  return { inputSearch };
}

export default connect(mapStateToProps, {
  handleFilterChange: actions.handleFilterChange,
  getProperty: propertyActions.getProperty,
  applyFilter: propertyActions.applyFilter,
})(CustomizedSearchInput);
