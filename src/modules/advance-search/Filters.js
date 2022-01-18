import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';

import {
  TextFieldInput,
  ChipsSelection,
  RangeSelection,
  BasicDateRangePicker,
} from './InputFields';
import * as filterActions from '../../state/actions/filters';

const Filters = (props) => {
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
    isNewProperty,
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

  const _propertyNewOrResale = {
    name: 'isNewProperty',
    label: 'is New Property/Project',
    value: isNewProperty,
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
      _meta: _propertyNewOrResale,
      render: () => <ChipsSelection {..._propertyNewOrResale} />,
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
      {cols.map((col) => (
        <Accordion key={col._meta.label}>
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
    </>
  );
};

function mapStateToProps(state) {
  const { advanceFilters } = state.filters;

  return advanceFilters;
}

export default connect(mapStateToProps, {
  handleFieldChange: filterActions.handleAdvanceFilterChange,
})(Filters);
