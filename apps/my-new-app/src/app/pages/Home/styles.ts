import styled from 'styled-components';
import { workoutProperties } from './utils';

export const containerSX = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  py: 2,
  gap: '30px',
};

export const LogoDiv = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;

export const tableContainerSX = {
  maxHeight: '60vh',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
};

export const tableCellSX = {
  fontWeight: 'bold',
  bgcolor: '#eee',
  maxWidth: `${100 / workoutProperties.length}%`,
};
