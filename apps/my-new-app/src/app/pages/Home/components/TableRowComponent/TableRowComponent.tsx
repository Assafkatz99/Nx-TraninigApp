import { IconButton, Modal, TableCell, TableRow } from '@mui/material';
import { convertDate,convertDurationToString } from '../../utils';
import React, { useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { cellBaseStyle } from './TableRowComponent.styles';
import ModalContent from '../ModalContent/ModalContent';

export interface ITableRow {
  _id: string;
  date: string;
  type: string;
  description: string;
  duration: number;
  difficulty: string;
  createdAt: string;
  updatedAt: string;
}

interface ITableRowData {
  data: ITableRow;
}

const TableRowComponent: React.FC<ITableRowData> = (Data) => {
  const rowData = Data.data;

  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = useState<'edit' | 'delete'>('edit');
  const handleOpen = (type: 'edit' | 'delete') => {
    setModalType(type);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <TableRow>
        <TableCell align="center" sx={cellBaseStyle}>
          {convertDate(new Date(rowData.date))}
        </TableCell>
        <TableCell align="center" sx={cellBaseStyle}>
          {rowData.type}
        </TableCell>
        <TableCell align="center" sx={cellBaseStyle}>
          {rowData.description}
        </TableCell>
        <TableCell align="center" sx={cellBaseStyle}>
          {convertDurationToString(rowData.duration)}
        </TableCell>
        <TableCell align="center" sx={cellBaseStyle}>
          {rowData.difficulty}
        </TableCell>
        <TableCell align="center" sx={cellBaseStyle}>
          <IconButton
            onClick={() => {
              handleOpen('edit');
            }}
            aria-label="edit"
          >
            <Edit />
          </IconButton>
        </TableCell>
        <TableCell align="center" sx={cellBaseStyle}>
          <IconButton
            onClick={() => {
              handleOpen('delete');
            }}
            aria-label="delete"
          >
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>

      <Modal open={open} onClose={handleClose}>
        <ModalContent modalType={modalType} data={rowData} />
      </Modal>
    </>
  );
};

export default TableRowComponent;
