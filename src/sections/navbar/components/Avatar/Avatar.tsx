import { Text } from '../../../../shared/components/Text';
import useMediaQuery from '@mui/material/useMediaQuery';

export function Avatar() {
  const isDesktop = useMediaQuery('(min-width:1024px)');

  return isDesktop ? (
    <Text variant="Large" fontSize="40px">
      GF
    </Text>
  ) : (
    <img src="/svg/smiling-avatar-mobile.svg" alt="avatar" />
  );
}
