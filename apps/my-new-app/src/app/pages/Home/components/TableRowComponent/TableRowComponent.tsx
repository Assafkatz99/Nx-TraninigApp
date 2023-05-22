import { IconButton, Modal, TableCell, TableRow } from '@mui/material';
import { convertDate, convertDurationToString } from '../../utils';
import React, { useContext, useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { cellBaseStyle } from './TableRowComponent.styles';
import ModalContent from '../ModalContent/ModalContent';
import { ITableRow } from '@nx-test/types';



interface ITableRowData {
  data: ITableRow;
}

const TableRowComponent: React.FC<ITableRowData> = (Data) => {
  const rowData = Data.data;

  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'edit' | 'delete'>('edit');

  const handleOpen = (type: 'edit' | 'delete') => {
    setModalType(type);
    setToggleModal(true);
  };

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

      <Modal open={toggleModal} onClose={() => setToggleModal(false)}>
          <div>

          <ModalContent
            toggleFn={setToggleModal}
            modalType={modalType}
            data={rowData}
            />
            </div>

      </Modal>
    </>
  );
};

export default TableRowComponent;
