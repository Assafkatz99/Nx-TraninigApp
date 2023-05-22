// import React, { createContext, useContext, useState } from 'react';



// interface ModalContextProps {
//   toggleModal: boolean;
//   setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
//   modalType: "add" | "edit" | "delete"
//   setModalType: React.Dispatch<React.SetStateAction<"add" | "edit" | "delete">>;
// }



// const defaultModalContext: ModalContextProps = {
//   toggleModal: false,
//   setToggleModal: ()=> null,
//   modalType:"add",
//   setModalType: ()=> null
// };

// export const ModalContext =
//   createContext<ModalContextProps>(defaultModalContext);

// const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [toggleModal, setToggleModal] = useState(false);
//   const [modalType, setModalType] = useState<"add" | "edit" | "delete">("add")


//   const contextValue: ModalContextProps = {
//     toggleModal,
//     setToggleModal,
//     modalType,
//     setModalType
//   };

//   return (
//     <ModalContext.Provider value={contextValue}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export default ModalContextProvider;
