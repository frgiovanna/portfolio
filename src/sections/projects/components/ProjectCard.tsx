import { Text } from '../../../shared/components/Text';
import { ActionsWrapper, Button, Card, Image } from './styles';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  code: string;
  demo?: string;
}

function ProjectCard({ title, description, image, code, demo }: ProjectCardProps) {
  return (
    <Card>
      <Image src={image} alt={`${title} preview`} />
      <Text variant="H2">{title}</Text>
      <Text>{description}</Text>

      <ActionsWrapper>
        <Button variant="primary" href={code}>
          Code
        </Button>
        <Button variant="secondary" href={demo}>
          Code
        </Button>
      </ActionsWrapper>
    </Card>
  );
}

export default ProjectCard;
