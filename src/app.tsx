import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setActions} from "./store/actions-slice.ts";
import ActionTable from "./components/actions-table.tsx";
import s from './app.module.css'
import SearchBar from "./components/search-bar/search-bar.tsx";


const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const actions = [
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_in", action_created_at: "2022-05-08T07:03:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-001", action: "logged_out", action_created_at: "2022-05-08T07:05:09.171245Z" },
      { username: "user-007", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-005", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-004", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
      { username: "user-002", action: "logged_out", action_created_at: "2022-05-08T07:01:09.171245Z" },
    ];
    dispatch(setActions(actions));
  }, [dispatch]);

  return (
    <div className={s.appWrapper}>
      <SearchBar />
      <ActionTable />
    </div>
  );
};

export default App;

