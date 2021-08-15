import React, { useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Loader(props) {
  const classes = useStyles();
  const { isOpen } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export const mapStateToProps = (state) => {
  const { isOpen } = state.loaders;
  return { isOpen };
};

const OverlayLoader = connect(mapStateToProps, null)(Loader);

export default OverlayLoader;
