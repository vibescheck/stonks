import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { createFilter } from 'react-select';
import cryptoOptions from '../../services/data/cryptoOptions';
import usStocksOptions from '../../services/data/usStocksOptions';

export default function AssetSelect({ type, selected, setSelected }) {
  // fontWeight: state.isSelected ? 'bold' : 'normal'
  const count = { i: 0 };
  /* const selectStyle = {
    option: (provided, state) => ({
      ...provided
    }),
    singleValue: (provided, state) => ({
      ...provided
    })
  }; */

  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: false,
    trim: false,
    matchFromStart: true
  };

  const loadOptions = async () => {
    return type === 'stocks' ? usStocksOptions : cryptoOptions;
  };

  /* const filterHelper = ({ label }, query) => {
    console.log(count.i);
    if (count.i >= 10 || !query) {
      return false;
    }
    if (label.toLowerCase().startsWith(query.toLowerCase())) {
      // eslint-disable-next-line operator-assignment
      // count.i = count.i + 1;
      return true;
    }
    return false;
  }; */

  return (
    <AsyncSelect
      id="search"
      loadOptions={loadOptions}
      // eslint-disable-next-line react/jsx-no-bind
      closeMenuOnSelect
      filterOption={createFilter(filterConfig)}
      placeholder="Name / Symbol"
      onChange={(val) => setSelected(val)}
      value={selected}
    />
  );
}
/* styles = { selectStyle };
onInputChange={() => {
        count.i = 0;
      }}
 */
