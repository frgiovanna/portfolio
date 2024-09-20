import { useBreakpoints } from '../../../../shared/hooks/useBreakpoints';
import { Text } from '../../../../shared/components/Text';
import { Image } from './styles';

export function Avatar() {
  const { isDesktop } = useBreakpoints();
  return isDesktop ? (
    <Text variant="Large" fontSize="40px">
      GF
    </Text>
  ) : (
    <Image src="/svg/smiling-avatar-mobile.svg" alt="avatar" />
  );
}
