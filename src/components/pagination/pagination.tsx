import React from 'react';
import { Button, ButtonGroup } from '@blueprintjs/core';
import s from './pagination.module.css'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={s.pagination}>
      <ButtonGroup>
        <Button icon="chevron-left" onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button icon="chevron-right" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
