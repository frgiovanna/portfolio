import { Text } from '../../../../shared/components/Text';
import { Hider, Image } from './styles';

export function Avatar() {
  return (
    <Hider>
      <Text variant="Large" fontSize="40px">
        GF
      </Text>

      <Image src="/png/avatar/smiling-avatar.png" alt="avatar" />
    </Hider>
  );
}
