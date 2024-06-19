import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { useGetToken } from './entities/User/useGetToken';

export default function App() {
  const [colorScheme, themeParams] = useThemeParams();
  useGetToken();
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
