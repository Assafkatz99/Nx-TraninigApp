import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './styels';
import Homepage from './pages/Home/Homepage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
