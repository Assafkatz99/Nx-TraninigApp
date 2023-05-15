import React from 'react';
import { LogoDiv, containerSX } from './styles';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {workoutProperties} from "./utils"

const Homepage: React.FC = () => {
  return (
    <Container sx={containerSX}>
      <LogoDiv>LOGO</LogoDiv>

      <Button variant="contained">Add Workout</Button>

      <TableContainer>
      <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {workoutProperties.map((headerLabel)=>{return(
                <TableCell align='center' sx={{fontWeight:"bold", bgcolor:"#eee", width:`${100/(workoutProperties.length)}%`}}>{headerLabel}</TableCell>
              )})}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow >
            {workoutProperties.map(()=>{return(
                <TableCell align='center'>DATA</TableCell>
              )})}
            </TableRow>
            <TableRow >
            {workoutProperties.map(()=>{return(
                <TableCell align='center'>DATA</TableCell>
              )})}
            </TableRow>
            <TableRow >
            {workoutProperties.map(()=>{return(
                <TableCell align='center'>DATA</TableCell>
              )})}
            </TableRow>
            <TableRow >
            {workoutProperties.map(()=>{return(
                <TableCell align='center'>DATA</TableCell>
              )})}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Homepage;
