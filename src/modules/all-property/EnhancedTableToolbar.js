import React, { useState } from 'react';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Accordion from '@material-ui/core/Accordion';
import Button from '@material-ui/core/Button';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';

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
  Buy: 'from Buyers',
  Sell: 'from Sellers',
  Rent: 'On Rent',
};

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const [expanded, setExpanded] = useState(false);
  const { numSelected, listType, deleteClick } = props;

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
            Property List {types[listType]}
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={deleteClick}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton
              aria-label="filter list"
              onClick={() => setExpanded(!expanded)}
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <Accordion expanded={expanded} elevation={0}>
        <AccordionSummary aria-controls="panel1c-content" id="panel1c-header">
          <CustomizedSearchInput />
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              <a href="#secondary-heading-and-columns" className={classes.link}>
                more filters
              </a>
            </Typography>
          </div>
        </AccordionDetails>
        <AccordionActions>
          <Button size="small">Clear</Button>
          <Button size="small" variant="contained" color="primary">
            Apply
          </Button>
        </AccordionActions>
      </Accordion>
    </>
  );
};

export default EnhancedTableToolbar;
