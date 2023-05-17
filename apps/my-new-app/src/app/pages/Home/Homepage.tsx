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

const Homepage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={containerSX}>
      <LogoDiv>LOGO</LogoDiv>

      <Button variant="contained" onClick={()=>{handleOpen()}}>Add Workout</Button>

      <TableContainer
        sx={{ maxHeight: '60vh', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {workoutProperties.map((headerLabel) => {
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
            {dataExample.map((data) => (
              <TableRowComponent data={data} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <ModalContent modalType="add" />
      </Modal>
    </Container>
  );
};

export default Homepage;
