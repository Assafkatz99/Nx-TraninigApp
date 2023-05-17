import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './styels';
import Homepage from './pages/Home/Homepage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ModalContextProvider from './contexts/modalProvider.context';

export function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </QueryClientProvider>
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
