import React from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup } from '@blueprintjs/core';
import {setFilter} from "../../store/actions-slice.ts";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <InputGroup
      placeholder="Поиск"
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
