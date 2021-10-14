import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import CustomizedBreadcrumbs from '../../components/Breadcrumb';
import { useTheme } from '@material-ui/core/styles';

// export const columns = {
//   projectName: {
//     name: 'projectName',
//     label: 'Project Name',
//   },
//   personName: {
//     name: 'personName',
//     label: 'personName',
//   },
//   locality: {
//     name: 'locality',
//     label: 'locality',
//   },
//   {
//     name: 'createdAt',
//     label: 'createdAt',
//   },
//   {
//     name: 'propertyType',
//     label: 'propertyType',
//   },
//   {
//     name: 'categoryType',
//     label: 'categoryType',
//   },
//   {
//     name: 'availableFrom',
//     label: 'availableFrom',
//   },
//   {
//     name: 'isNewProperty',
//     label: 'isNewProperty',
//   },
//   {
//     name: 'postBy',
//     label: 'postBy',
//   },
//   {
//     name: 'personPhone',
//     label: 'personPhone',
//   },
//   {
//     name: 'about',
//     label: 'about',
//   },
//   {
//     name: 'address',
//     label: 'address',
//   },
//   {
//     name: 'builtUpArea',
//     label: 'builtUpArea',
//   },
//   {
//     name: 'areaUnit',
//     label: 'areaUnit',
//   },
//   {
//     name: 'price',
//     label: 'price',
//   },
//   {
//     name: 'pricePerUnit',
//     label: 'pricePerUnit',
//   },
//   {
//     name: 'city',
//     label: 'city',
//   },
//   {
//     name: 'bedrooms',
//     label: 'bedrooms',
//   },
//   {
//     name: 'carpetArea',
//     label: 'carpetArea',
//   },
//   {
//     name: 'isNegotiable',
//     label: 'isNegotiable',
//   },
//   {
//     name: 'noOfFloors',
//     label: 'noOfFloors',
//   },
//   {
//     name: 'propertyFloorNo',
//     label: 'propertyFloorNo',
//   },
// }

const AdvanceSearch = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const [personName, setPersonName] = useState([]);
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const theme = useTheme();
  return (
    <>
      <CustomizedBreadcrumbs currentPage={'Advance Search'} />
      <div>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }

              return selected.join(', ');
            }}
            variant="standard"
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default AdvanceSearch;
// free text
//   personName: '',  //
//   personPhone: '',
//   address: '',  //
//   locality: '',//
//   projectName: '',//
//   about: '', //
//   city: 'Surat', //
//   noOfFloors: '',
//   propertyFloorNo: '',

// fixed options
//   postBy: 'Broker',
//   categoryType: '',
//   propertyType: '',
//   bedrooms: '2 BHK',

//list
//   areaUnit: 'Square Feet',

// number
//   price: 0, range
//   pricePerUnit: 0, range
//   builtUpArea: 0, range
//   carpetArea: 0, range

// Boolean
//   isNewProperty: 'New',
//   isNegotiable: false,

// date - range
//   availableFrom: '',
//   createdAt: ''

// new field to be added ... is booking open ?
