import React, { useState } from 'react';
import { LogoDiv, containerSX, tableCellSX, tableContainerSX } from './styles';
import {
  Button,
  Container,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { workoutProperties } from './utils';
import TableRowComponent from './components/TableRowComponent/TableRowComponent';
import ModalContent from './components/ModalContent/ModalContent';
import { useGetWorkouts } from './Homepage.api';

const Homepage: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const { data, isLoading } = useGetWorkouts();

  const handleClose = () => {
    setToggleModal(false)
  }

  const handleOpen = () =>{
    setToggleModal(true);
  }




  return  isLoading ? (
    <>loading...</>
  ) : (
   <Container sx={containerSX}>
      <LogoDiv>LOGO</LogoDiv>

      <Button
        variant="contained"
        onClick={() => {
          handleOpen()
        }}
      >
        Add Workout
      </Button>

      <TableContainer
        sx={tableContainerSX}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow key={1}>
              {workoutProperties.map((headerLabel, index) => {
                return (
                  <TableCell
                    key={index}
                    align="center"
                    sx={tableCellSX}
                  >
                    {headerLabel}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((rowData, index) => {
              return <TableRowComponent key={index} data={rowData} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={toggleModal} onClose={()=>{handleClose()}}>
        <div>
          <ModalContent toggleFn={setToggleModal} modalType="add" />
        </div>
      </Modal>
    </Container>
  );
};

export default Homepage;
