import TableCell from '@material-ui/core/TableCell';
import { format } from 'date-fns';

const Row = (value) => <TableCell>{value || '-'}</TableCell>;

export const columnsMetaData = {
  selection: {
    title: '',
  },
  projectName: { title: 'Project', render: (value) => <Row value={value} /> },
  personName: {
    title: 'Person Name',
    render: (value) => <Row value={value} />,
  },
  postBy: { title: 'Post By', render: (value) => <Row value={value} /> },
  personPhone: { title: 'Phone', render: (value) => <Row value={value} /> },
  locality: { title: 'Area', render: (value) => <Row value={value} /> },
  createdAt: { title: 'Created At', render: (value) => <Row value={value} /> },
  listType: { title: 'Type', render: (value) => <Row value={value} /> },
  propertyType: {
    title: 'Property Type',
    render: (value) => <Row value={value} />,
  },
  categoryType: { title: 'Category', render: (value) => <Row value={value} /> },
  availableFrom: {
    title: 'Available From',
    render: (value) => {
      const dateValue = value ? format(new Date(value), 'dd-MM-yyyy') : '-';
      return <Row value={dateValue} />;
    },
  },
  isNegotiable: {
    title: 'Is Negotiable',
    render: (value) => {
      const isNegotiable = value ? 'Yes' : 'No';
      return <Row value={isNegotiable} />;
    },
  },
  isNewProperty: {
    title: 'Is New Property',
    render: (value) => <Row value={value} />,
  },
  about: { title: 'About', render: (value) => <Row value={value} /> },
  address: { title: 'Address', render: (value) => <Row value={value} /> },
  builtUpArea: {
    title: 'BuildUp Area',
    render: (value) => <Row value={value} />,
  },
  areaUnit: { title: 'Unit Type', render: (value) => <Row value={value} /> },
  price: { title: 'Price', render: (value) => <Row value={value} /> },
  pricePerUnit: {
    title: 'Price Per Unit',
    render: (value) => <Row value={value} />,
  },
  city: { title: 'City', render: (value) => <Row value={value} /> },
  actions: { title: 'Actions', render: (value) => <Row value={value} /> },
};
