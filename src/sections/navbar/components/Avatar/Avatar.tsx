import { useBreakpoints } from '../../../../shared/hooks/useBreakpoints';
import { Text } from '../../../../shared/components/Text';

export function Avatar() {
  const { isDesktop } = useBreakpoints();
  return isDesktop ? (
    <Text variant="Large" fontSize="40px">
      GF
    </Text>
  ) : (
    <img src="/svg/smiling-avatar-mobile.svg" alt="avatar" />
  );
}
