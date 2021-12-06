import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { format } from 'date-fns';

export const row = (value) => (
  <TableCell style={{ maxWidth: 200 }}>{value || '-'}</TableCell>
);

export const columnsMetaData = {
  selection: {
    title: '',
    render: (value, handleCheckboxChange, item, checked) => (
      <TableCell padding="checkbox">
        <Box display="flex">
          <Checkbox
            color="primary"
            onChange={() => handleCheckboxChange('selection', item._id)}
            checked={checked}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </Box>
      </TableCell>
    ),
  },
  projectName: {
    title: 'Project',
    render: (value, viewRowDetails, item) => (
      <TableCell>
        <Link
          component="button"
          variant="subtitle2"
          style={{ fontWeight: 'bold' }}
          onClick={() => {
            viewRowDetails('projectName', item);
          }}
        >
          {value || '[View Details]'}
        </Link>
      </TableCell>
    ),
  },
  personName: {
    title: 'Person Name',
    render: (value) => row(value),
  },
  postBy: { title: 'Post By', render: (value) => row(value) },
  personPhone: { title: 'Phone', render: (value) => row(value) },
  locality: { title: 'Area', render: (value) => row(value) },
  createdAt: {
    title: 'Created At',
    render: (value) => {
      const dateValue = value ? format(new Date(value), 'MMM dd, yyyy') : '-';
      return row(dateValue);
    },
  },
  listType: { title: 'Type', render: (value) => row(value) },
  propertyType: {
    title: 'Property Type',
    render: (value) => row(value),
  },
  categoryType: { title: 'Category', render: (value) => row(value) },
  availableFrom: {
    title: 'Available From',
    render: (value) => {
      const dateValue = value ? format(new Date(value), 'MMM dd, yyyy') : '-';
      return row(dateValue);
    },
  },
  isNegotiable: {
    title: 'Is Negotiable',
    render: (value) => {
      const isNegotiable = value ? 'Yes' : 'No';
      return row(isNegotiable);
    },
  },
  isNewProperty: {
    title: 'Is New Property',
    render: (value) => row(value),
  },
  about: { title: 'About', render: (value) => row(value) },
  address: { title: 'Address', render: (value) => row(value) },
  builtUpArea: {
    title: 'BuildUp Area',
    render: (value) => row(value),
  },
  areaUnit: { title: 'Unit Type', render: (value) => row(value) },
  price: { title: 'Price', render: (value) => row(value) },
  pricePerUnit: {
    title: 'Price Per Unit',
    render: (value) => row(value),
  },
  city: { title: 'City', render: (value) => row(value) },
  actions: {
    title: 'Actions',
    render: (value, editRowDetails, item) => (
      <TableCell padding="checkbox">
        <IconButton
          color="primary"
          aria-label="edit details"
          component="span"
          onClick={() => editRowDetails('actions', item)}
        >
          <EditIcon />
        </IconButton>
      </TableCell>
    ),
  },
};
