import React, { useEffect, useState } from 'react';
import { LogoDiv, containerSX } from './styles';
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


  return isLoading ? (
    <>loading...</>
  ) : (
    <Container sx={containerSX}>
      <LogoDiv>LOGO</LogoDiv>

      <Button
        variant="contained"
        onClick={() => {
          setToggleModal(true);
        }}
      >
        Add Workout
      </Button>

      <TableContainer
        sx={{
          maxHeight: '60vh',
          boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow key={1}>
              {workoutProperties.map((headerLabel, index) => {
                return (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      fontWeight: 'bold',
                      bgcolor: '#eee',
                      maxWidth: `${100 / workoutProperties.length}%`,
                    }}
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
      <Modal open={toggleModal} onClose={() => setToggleModal(false)}>
        <div>
          <ModalContent toggleFn={setToggleModal} modalType="add" />
        </div>
      </Modal>
    </Container>
  );
};

export default Homepage;
