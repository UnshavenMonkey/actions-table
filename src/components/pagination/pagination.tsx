import {FC} from 'react';
import {Button, ButtonGroup} from '@blueprintjs/core';
import s from './pagination.module.css'

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={s.pagination}>
      <ButtonGroup>
        <Button icon="chevron-left" onClick={handlePrevious} disabled={currentPage === 1} className={s.chevron} />
        <span>Страница {currentPage} из {totalPages}</span>
        <Button icon="chevron-right" onClick={handleNext} disabled={currentPage === totalPages} className={s.chevron} />
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
