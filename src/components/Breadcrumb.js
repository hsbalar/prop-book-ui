import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: '#e8ecfa',
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

export default function CustomizedBreadcrumbs({ currentPage }) {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        className="active"
        label={currentPage}
        onClick={(e) => e.preventDefault()}
      />
    </Breadcrumbs>
  );
}
