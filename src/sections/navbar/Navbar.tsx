import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Text } from '../../shared/components/Text';
import { Container } from '../../shared/components/Container';

export function Navbar() {
  return (
    <AppBar position="fixed" sx={{ boxShadow: 'none', paddingY: "8px" }}>
      <Container>
        <Toolbar>
          <Text variant="Large">GF</Text>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
