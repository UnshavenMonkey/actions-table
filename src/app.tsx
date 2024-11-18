import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setActions} from "./store/actions-slice.ts";
import ActionTable from "./components/actions-table/actions-table.tsx";
import s from './app.module.css'
import SearchBar from "./components/search-bar/search-bar.tsx";
import {ACTIONS} from "./consts.ts";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActions(ACTIONS));
  }, [dispatch]);

  return (
    <div className={s.appWrapper}>
      <SearchBar />
      <ActionTable />
    </div>
  );
};

export default App;

