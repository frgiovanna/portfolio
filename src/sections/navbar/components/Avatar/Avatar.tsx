import { Text } from '../../../../shared/components/Text';
import { Hider } from './styles';

export function Avatar() {

  return (
    <Hider>
      <Text variant="Large" fontSize="40px">
        GF
      </Text>

      <img src="/svg/smiling-avatar-mobile.svg" alt="avatar" />
    </Hider>
  );
}
