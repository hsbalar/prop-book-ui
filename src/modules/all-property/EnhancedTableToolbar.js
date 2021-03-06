import React from 'react';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AddIcon from '@material-ui/icons/Add';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import ColumnsFilter from './ColumnsFilter';
import CustomizedSearchInput from './CustomizedSearchInput';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const types = {
  Buy: 'Buyers',
  Sell: 'Sellers',
  Rent: 'Rental',
};

const EnhancedTableToolbar = ({
  numSelected,
  listType,
  deleteClick,
  navigateToAddProperty,
}) => {
  const classes = useToolbarStyles();

  return (
    <>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {types[listType]}
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={deleteClick}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <>
            <Tooltip title="Add New">
              <IconButton aria-label="add-new" onClick={navigateToAddProperty}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter list">
              <ColumnsFilter />
            </Tooltip>
          </>
        )}
      </Toolbar>
      <Accordion expanded={false} elevation={0}>
        <AccordionSummary aria-controls="panel1c-content" id="panel1c-header">
          <CustomizedSearchInput />
        </AccordionSummary>
      </Accordion>
    </>
  );
};

export default EnhancedTableToolbar;
