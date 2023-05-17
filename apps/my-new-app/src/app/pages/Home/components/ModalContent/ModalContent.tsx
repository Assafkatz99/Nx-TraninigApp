import React from 'react'
import { CreateEditModalStyle,DeleteModalStyle } from './ModalContent.style'
import { ITableRow } from '../TableRowComponent/TableRowComponent';
import CreateEditModalForm from '../CreateEditModalForm/CreateEditModalForm';

interface IModalCreationData {
  data?:ITableRow;
  modalType: "add" | "edit" | "delete"
}

const ModalContent: React.FC<IModalCreationData> = (Data) => {
  return (
  
      (() => {
        switch (Data.modalType) {
          case 'add':
            return <CreateEditModalStyle><CreateEditModalForm /></CreateEditModalStyle>;
          case 'edit':
            return <CreateEditModalStyle><CreateEditModalForm data={Data.data}/></CreateEditModalStyle>;
          default: //delete
            return <DeleteModalStyle><div>Default content</div></DeleteModalStyle>;
        }
      })()
  )
}

export default ModalContent
