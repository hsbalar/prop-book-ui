import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';

import * as filterActions from '../../state/actions/filters';
import { columns } from '../constants';
import { columnsMetaData } from './getColumns';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: theme.spacing(2),
    zIndex: 999,
  },
  checkbox: {
    padding: 0,
    paddingRight: '4px',
    paddingLeft: '4px',
    '&:hover': {
      background: 'none',
    },
  },
  list: {
    maxHeight: 200,
    overflow: 'scroll',
  },
}));

function ColumnsFilter({ selectedColumns, handleColumnsChange }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleFilersChange = (name) => {
    const cols = [...selectedColumns];
    const index = cols.indexOf(name);
    if (index > -1) {
      cols.splice(index, 1);
    } else {
      cols.push(name);
    }

    handleColumnsChange(cols);
  };

  const renderColumnsList = columns.map((colName) => ({
    name: colName,
    title: columnsMetaData[colName].title,
    checked: selectedColumns.includes(colName),
  }));

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-label="filter list"
        onClick={handleToggle}
      >
        <FilterListIcon />
      </IconButton>
      <Popper
        className={classes.paper}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.list}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {renderColumnsList.map(({ name, title, checked }) => (
                    <MenuItem key={name}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            onChange={() => handleFilersChange(name)}
                            className={classes.checkbox}
                            checked={checked}
                            name="checkedA"
                          />
                        }
                        label={title}
                      />
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

function mapStateToProps(state) {
  const { columns } = state.filters;

  return { selectedColumns: columns };
}

export default connect(mapStateToProps, {
  handleColumnsChange: filterActions.filterColumnsChange,
})(ColumnsFilter);
