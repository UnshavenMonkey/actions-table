import React from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup } from '@blueprintjs/core';
import {setFilter} from "../../store/actions-slice.ts";
import s from './search-bar.module.css'

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <InputGroup
      placeholder="Поиск"
      onChange={handleSearchChange}
      className={s.searchBar}
    />
  );
};

export default SearchBar;
