import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Column, Cell, Table2} from '@blueprintjs/table';
import {selectActions, selectFilter} from "../store/selectors.ts";
import "@blueprintjs/table/lib/css/table.css";
import Pagination from "./pagination/pagination.tsx";

const ROWS_PER_PAGE = 10; // Количество строк на странице

const ActionTable: React.FC = () => {
  const actions = useSelector(selectActions);
  const filter = useSelector(selectFilter);
  const [currentPage, setCurrentPage] = useState(1);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  const filteredActions = actions.filter((action) => {
    console.log(Object.values(action).join('').includes(filter))
    return Object.values(action).join('').includes(filter)
  }

  );

  const totalPages = Math.ceil(filteredActions.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentActions = filteredActions.slice(startIndex, startIndex + ROWS_PER_PAGE);

  return (
    <div>
      <Table2 numRows={currentActions.length} cellRendererDependencies={currentActions}>
        <Column name="Username"
                cellRenderer={(rowIndex) => <Cell>{currentActions[rowIndex].username}</Cell>}/>
        <Column
          name="Action"
          cellRenderer={(rowIndex) => <Cell>{currentActions[rowIndex].action}</Cell>}
        />
        <Column
          name="Timestamp"
          cellRenderer={(rowIndex) => (
            <Cell>{new Date(currentActions[rowIndex].action_created_at).toLocaleString()}</Cell>
          )}
        />
      </Table2>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ActionTable;
