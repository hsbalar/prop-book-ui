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
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';

import CustomizedBreadcrumbs from '../../components/Breadcrumb';
import Pagination from '../../components/Pagination';
import AlertDialog from '../../components/AlertDialog';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import BottomNavigation from './PropertyTypeFilter';
import FullScreenDialog from './FullScreenDialog';
import * as actions from '../../state/actions/propertyDetails';
import { columnsMetaData } from './getColumns';

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

const columnsa = [
  'Project',
  'Area',
  'Category',
  'Type',
  'Post By',
  'Person Name',
  'Person Phone',
];

function AllProperty({
  columns,
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getProperty(), [listType]);
  const numSelected = Object.values(selection).filter((el) => el).length;

  const handleDeleteRows = () => {
    deleteProperty();
    setOpen(false);
  };

  const viewRowDetails = (item) => {
    setCurrentDetails(item);
    setOpenFullScreenDialog(true);
  };

  const editRowDetails = (item = null) => {
    if (item) setEditRowData(item);
    history.push('/add-property-details');
  };

  const onCheckboxChange = (_id) => {
    const selected = { ...selection };
    selected[_id] = !selected[_id];
    setPropertyData({ selection: selected });
  };

  const handleRenderAction = (name, data) => {
    console.log(name, data);
  };

  return (
    <>
      <CustomizedBreadcrumbs currentPage="Properties" />
      <BottomNavigation />
      <Paper className={classes.tableContainer}>
        <EnhancedTableToolbar
          numSelected={numSelected}
          listType={listType}
          navigateToAddProperty={() => editRowDetails()}
          deleteClick={() => setOpen(true)}
        />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((colName) => (
                  <TableCell key={colName}>
                    <Typography variant="body1">
                      {columnsMetaData[colName].title}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row._id}>
                  {columns.map((colName) => {
                    const value = row[colName];
                    const { render } = columnsMetaData[colName];
                    return <>{render(value, handleRenderAction, row)}</>;
                  })}
                </TableRow>
              ))}

              {/* <TableRow key={row._id}>
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
                  </Box>
                </TableCell>
                <TableCell>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      viewRowDetails(row);
                    }}
                  >
                    {row.projectName}
                  </Link>
                </TableCell>
                <TableCell>{row.locality}</TableCell>
                <TableCell>{row.categoryType}</TableCell>
                <TableCell>{row.propertyType}</TableCell>
                <TableCell>{row.postBy}</TableCell>
                <TableCell>{row.personName}</TableCell>
                <TableCell>{row.projectPhone}</TableCell>
                <TableCell padding="checkbox">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => editRowDetails(row)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow> */}

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
  const { listType, columns } = state.filters;
  const { tableData } = state.propertyDetails;

  return { listType, tableData, columns };
}

export default connect(mapStateToProps, {
  getProperty: actions.getProperty,
  setPropertyData: actions.setPropertyData,
  deleteProperty: actions.deleteProperty,
  setEditRowData: actions.setEditRowData,
})(AllProperty);
