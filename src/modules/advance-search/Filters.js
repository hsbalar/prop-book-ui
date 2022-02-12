import React, { useEffect, useCallback } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

import { connect } from 'react-redux';

import {
  TextFieldInput,
  ChipsSelection,
  RangeSelection,
  BasicDateRangePicker,
} from './InputFields';
import * as filterActions from '../../state/actions/filters';

import { makeStyles } from '@material-ui/core/styles';
import { debounce } from 'lodash';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(780)]: {
      maxHeight: '335px',
      overflow: 'scroll',
    },
  },
  hasTabContent: {
    borderRight: '2px solid #3f51b5',
  },
}));

const Filters = (props) => {
  const {
    handleAdvanceFilterChange,
    applyFilter,
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
    isNewProperty,
  } = props;

  useEffect(() => applyFilter(), [applyFilter]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeFilterHandler = useCallback(debounce(applyFilter, 1000), []);

  const handleFieldChange = (value) => {
    handleAdvanceFilterChange(value);
    changeFilterHandler();
  };

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

  // eslint-disable-next-line no-unused-vars
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

  const _propertyNewOrResale = {
    name: 'isNewProperty',
    label: 'Is New Property/Project',
    value: isNewProperty,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  const _propertyType = {
    name: 'propertyType',
    label: 'Property Type',
    value: propertyType,
    handleChange: (name, value) => handleFieldChange({ [name]: value }),
  };

  // eslint-disable-next-line no-unused-vars
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
    label: 'Build Up Area',
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
    // {
    //   _meta: _city,
    //   render: () => <TextFieldInput {..._city} />,
    // },
    {
      _meta: _postBy,
      render: () => <ChipsSelection {..._postBy} />,
    },
    {
      _meta: _propertyNewOrResale,
      render: () => <ChipsSelection {..._propertyNewOrResale} />,
    },
    {
      _meta: _propertyType,
      render: () => <ChipsSelection {..._propertyType} />,
    },
    // {
    //   _meta: _bedrooms,
    //   render: () => <ChipsSelection {..._bedrooms} />,
    // },
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

  const classes = useStyles();

  const hasTabContent = (field, value) => {
    const isArrayTypeField = [
      'price',
      'pricePerUnit',
      'builtUpArea',
      'createdAt',
      'availableFrom',
    ].includes(field);
    if (isArrayTypeField) return value[0] && value[1];
    else return !!value;
  };

  return (
    <Box className={classes.container}>
      {cols.map((col, i) => (
        <Accordion
          key={col._meta.name}
          className={
            hasTabContent(col._meta.name, col._meta.value)
              ? classes.hasTabContent
              : ''
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{col._meta.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>{col.render()}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

function mapStateToProps(state) {
  const { advanceFilters } = state.filters;

  return advanceFilters;
}

export default connect(mapStateToProps, {
  handleAdvanceFilterChange: filterActions.handleAdvanceFilterChange,
  applyFilter: filterActions.applyAdvanceFilter,
})(Filters);
