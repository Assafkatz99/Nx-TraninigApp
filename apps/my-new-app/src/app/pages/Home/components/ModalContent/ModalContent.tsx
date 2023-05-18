import React, { ReactNode } from 'react'
import { CreateEditModalStyle,DeleteModalStyle } from './ModalContent.style'
import { ITableRow } from '../TableRowComponent/TableRowComponent';
import CreateEditModalForm from '../CreateEditModalForm/CreateEditModalForm';
import DeleteModal from '../DeleteModal/DeleteModal';

interface IModalCreationData {
  data?:ITableRow;
  modalType: "add" | "edit" | "delete",
  toggleFn:(a:boolean)=>void,
}

const ModalContent: React.FC<IModalCreationData> = (Data) => {
  return (
      (() => {
        switch (Data.modalType) {
          case 'add':
            return <CreateEditModalStyle><CreateEditModalForm toggleFn={Data.toggleFn} /></CreateEditModalStyle>;
          case 'edit':
            return <CreateEditModalStyle><CreateEditModalForm toggleFn={Data.toggleFn} data={Data.data}/></CreateEditModalStyle>;
          default: //delete
            return <DeleteModalStyle><DeleteModal workoutId={Data.data?._id} toggleFn={Data.toggleFn}/></DeleteModalStyle>;
        }
      })()
  )
}
  
export default ModalContent
