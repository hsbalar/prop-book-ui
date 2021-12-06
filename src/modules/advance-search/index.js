import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import CustomizedBreadcrumbs from '../../components/Breadcrumb';
import {
  TextFieldInput,
  ChipsSelection,
  RangeSelection,
  BasicDateRangePicker,
} from './inputFields';
import * as filterActions from '../../state/actions/filters';

// {
//   name: 'createdAt',
//   label: 'createdAt',
// },
// {
//   name: 'propertyType',
//   label: 'propertyType',
// },
// {
//   name: 'categoryType',
//   label: 'categoryType',
// },
// {
//   name: 'availableFrom',
//   label: 'availableFrom',
// },
// {
//   name: 'isNewProperty',
//   label: 'isNewProperty',
// },
// {
//   name: 'postBy',
//   label: 'postBy',
// },
// {
//   name: 'personPhone',
//   label: 'personPhone',
// },
// {
//   name: 'about',
//   label: 'about',
// },
// {
//   name: 'builtUpArea',
//   label: 'builtUpArea',
// },
// {
//   name: 'areaUnit',
//   label: 'areaUnit',
// },
// {
//   name: 'price',
//   label: 'price',
// },
// {
//   name: 'pricePerUnit',
//   label: 'pricePerUnit',
// },

// {
//   name: 'bedrooms',
//   label: 'bedrooms',
// },
// {
//   name: 'carpetArea',
//   label: 'carpetArea',
// },
// {
//   name: 'isNegotiable',
//   label: 'isNegotiable',
// },
// {
//   name: 'noOfFloors',
//   label: 'noOfFloors',
// },
// {
//   name: 'propertyFloorNo',
//   label: 'propertyFloorNo',
// },
// };

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const AdvanceSearch = (props) => {
  const classes = useStyles();
  const {
    handleFieldChange,
    projectName,
    personName,
    locality,
    address,
    city,
    postBy,
    propertyType,
    bedrooms,
    price,
    pricePerUnit,
    builtUpArea,
    availableFrom,
    createdAt,
  } = props;

  const _projectName = {
    name: 'projectName',
    label: 'Project Name',
    value: projectName,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _personName = {
    name: 'personName',
    label: 'Person Name',
    value: personName,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _locality = {
    name: 'locality',
    label: 'Area',
    value: locality,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _address = {
    name: 'address',
    label: 'Address',
    value: address,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _city = {
    name: 'city',
    label: 'City',
    value: city,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _postBy = {
    name: 'postBy',
    label: 'Post By',
    value: postBy,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _propertyType = {
    name: 'propertyType',
    label: 'Property Type',
    value: propertyType,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _bedrooms = {
    name: 'bedrooms',
    label: 'No of Bedrooms',
    value: bedrooms,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _price = {
    name: 'price',
    label: 'Price',
    value: price,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _pricePerUnit = {
    name: 'pricePerUnit',
    label: 'Price Per Unit',
    value: pricePerUnit,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _builtUpArea = {
    name: 'builtUpArea',
    label: 'Area',
    value: builtUpArea,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _availableFrom = {
    name: 'availableFrom',
    label: 'Available From',
    value: availableFrom,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _createdAt = {
    name: 'createdAt',
    label: 'Created At',
    value: createdAt,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const cols = [
    {
      _meta: _projectName,
      render: () => <TextFieldInput {..._projectName} />,
    },
    {
      _meta: _personName,
      render: () => <TextFieldInput {..._personName} />,
    },
    {
      _meta: _locality,
      render: () => <TextFieldInput {..._locality} />,
    },
    {
      _meta: _address,
      render: () => <TextFieldInput {..._address} />,
    },
    {
      _meta: _city,
      render: () => <TextFieldInput {..._city} />,
    },
    {
      _meta: _postBy,
      render: () => <ChipsSelection {..._postBy} />,
    },
    {
      _meta: _propertyType,
      render: () => <ChipsSelection {..._propertyType} />,
    },
    {
      _meta: _bedrooms,
      render: () => <ChipsSelection {..._bedrooms} />,
    },
    {
      _meta: _price,
      render: () => <RangeSelection {..._price} />,
    },
    {
      _meta: _pricePerUnit,
      render: () => <RangeSelection {..._pricePerUnit} />,
    },
    {
      _meta: _builtUpArea,
      render: () => <RangeSelection {..._builtUpArea} />,
    },
    {
      _meta: _availableFrom,
      render: () => <BasicDateRangePicker {..._availableFrom} />,
    },
    {
      _meta: _createdAt,
      render: () => <BasicDateRangePicker {..._createdAt} />,
    },
  ];
  return (
    <>
      <CustomizedBreadcrumbs currentPage={'Advance Search'} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            {cols.map((col) => (
              <Accordion key={col._meta.label}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {col._meta.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>{col.render()}</AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper>asas</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// free text
//   personName: '',  //
//   personPhone: '', X should not be
//   address: '',  //
//   locality: '',//
//   projectName: '',//
//   about: '', // X
//   city: 'Surat', //
//   noOfFloors: '',
//   propertyFloorNo: '',

// fixed options
//   postBy: 'Broker', //
//   categoryType: '',//
//   propertyType: '', //
//   bedrooms: '2 BHK',//

//list
//   areaUnit: 'Square Feet', XX

// number
//   price: 0, range
//   pricePerUnit: 0, range
//   builtUpArea: 0, range
//   carpetArea: 0, range XX

// Boolean
//   isNewProperty: 'New',
//   isNegotiable: false,

// date - range
//   availableFrom: '',
//   createdAt: ''

// new field to be added ... is booking open ?

function mapStateToProps(state) {
  const { advanceFilters } = state.filters;

  return advanceFilters;
}

export default connect(mapStateToProps, {
  handleFieldChange: filterActions.handleAdvanceFilterChange,
})(AdvanceSearch);
