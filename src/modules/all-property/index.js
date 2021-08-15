import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';

import CustomizedBreadcrumbs from '../../components/Breadcrumb';
import BottomNavigation from '../../components/PropertyTypeFilter';
import Pagination from '../../components/Pagination';
import AlertDialog from '../../components/AlertDialog';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import FullScreenDialog from './FullScreenDialog';
import * as actions from '../../state/actions/propertyDetails';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  link: {
    display: 'flex',
  },
  tableContainer: {
    marginTop: '16px',
  },
});

const columns = [
  'Project',
  'Area',
  'Category',
  'Type',
  'Post By',
  'Person Name',
  'Person Phone',
];

function AllProperty({
  listType,
  getProperty,
  setPropertyData,
  setEditRowData,
  deleteProperty,
  tableData,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [currentDetails, setCurrentDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [openFullScreenDialog, setOpenFullScreenDialog] = useState(false);
  const { list, page, total, rowsPerPage, selection } = tableData;

  useEffect(() => getProperty({ listType, page, rowsPerPage }), [listType]);
  const numSelected = Object.values(selection).filter((el) => el).length;

  const handleDeleteRows = () => {
    deleteProperty();
    setOpen(false);
  };

  const viewRowDetails = (item) => {
    setCurrentDetails(item);
    setOpenFullScreenDialog(true);
  };

  const editRowDetails = (item) => {
    setEditRowData(item);
    history.push('/add-property-details');
  };

  return (
    <>
      <CustomizedBreadcrumbs currentPage="Properties" />
      <BottomNavigation />
      <Paper className={classes.tableContainer}>
        <EnhancedTableToolbar
          numSelected={numSelected}
          listType={listType}
          deleteClick={() => setOpen(true)}
        />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">Actions</Typography>
                </TableCell>
                {columns.map((text) => (
                  <TableCell key={text}>
                    <Typography variant="body1">{text}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row._id}>
                  <TableCell padding="checkbox">
                    <Box display="flex">
                      <Checkbox
                        color="primary"
                        onChange={() => {
                          const selected = { ...selection };
                          selected[row._id] = !selected[row._id];
                          setPropertyData({ selection: selected });
                        }}
                        checked={selection[row._id] || false}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                      />
                      <Box display="flex">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          onClick={() => editRowDetails(row)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          aria-label="view"
                          component="span"
                          onClick={() => viewRowDetails(row)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row.locality}</TableCell>
                  <TableCell>{row.categoryType}</TableCell>
                  <TableCell>{row.propertyType}</TableCell>
                  <TableCell>{row.postBy}</TableCell>
                  <TableCell>{row.projectName}</TableCell>
                  <TableCell>{row.personName}</TableCell>
                  <TableCell>{row.projectPhone}</TableCell>
                </TableRow>
              ))}
              {list.length <= 0 && (
                <TableRow style={{ height: 200 }}>
                  <TableCell colSpan={12}>
                    <Typography
                      component="h1"
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      No Records Found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <Pagination
                  total={total}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  handleChangePage={(e, pageNo) =>
                    setPropertyData({ page: pageNo })
                  }
                  handleChangeRowsPerPage={(e) =>
                    setPropertyData({
                      page: 0,
                      rowsPerPage: Number(e.target.value),
                    })
                  }
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
      <FullScreenDialog
        open={openFullScreenDialog}
        propertyDetails={currentDetails}
        handleClose={() => setOpenFullScreenDialog(false)}
      />
      <AlertDialog
        open={open}
        handleDelete={handleDeleteRows}
        handleClose={() => setOpen(false)}
      />
    </>
  );
}

function mapStateToProps(state) {
  const { listType } = state.filters;
  const { tableData } = state.propertyDetails;

  return { listType, tableData };
}

export default connect(mapStateToProps, {
  getProperty: actions.getProperty,
  setPropertyData: actions.setPropertyData,
  deleteProperty: actions.deleteProperty,
  setEditRowData: actions.setEditRowData,
})(AllProperty);
