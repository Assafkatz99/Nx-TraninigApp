import React from 'react';
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
import { workoutProperties, dataExample } from './utils';
import TableRowComponent from './components/TableRowComponent/TableRowComponent';
import ModalContent from './components/ModalContent/ModalContent';
import { useGetWorkouts } from './components/Homepage.api';

const Homepage: React.FC = () => {

  const { data, isLoading } = useGetWorkouts();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    
      isLoading ? (
        <>loading...</>
      ) : (
        <Container sx={containerSX}>
          <LogoDiv>LOGO</LogoDiv>

          <Button
            variant="contained"
            onClick={() => {
              handleOpen();
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
                <TableRow >
                  {workoutProperties.map((headerLabel, i ) => {
                    return (
                      <TableCell
                        
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
                {data?.data.map((data) => (
                  <TableRowComponent data={data} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Modal open={open} onClose={handleClose}>
            <ModalContent modalType="add" />
          </Modal>
        </Container>
      )
    
  );
};

export default Homepage;
