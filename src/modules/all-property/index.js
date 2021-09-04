import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
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
    setTimeout(() => history.push('/add-property-details'));
  };

  const onCheckboxChange = (_id) => {
    const selected = { ...selection };
    selected[_id] = !selected[_id];
    setPropertyData({ selection: selected });
  };

  const handleRenderAction = (name, data) => {
    if (name === 'selection') onCheckboxChange(data);
    else if (name === 'projectName') viewRowDetails(data);
    else if (name === 'actions') editRowDetails(data);
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
                    return (
                      <>
                        {render(
                          value,
                          handleRenderAction,
                          row,
                          selection[row._id] || false
                        )}
                      </>
                    );
                  })}
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
