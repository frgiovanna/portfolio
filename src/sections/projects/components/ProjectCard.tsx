import { Card } from '@shared/components/Card';
import { Text } from '@shared/components/Text';
import { ActionsWrapper, Button, Image, Wrapper } from './styles';

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
      <Wrapper>
        <Image src={image} alt={`${title} preview`} />
        <Text variant="H2">{title}</Text>
        <Text>{description}</Text>

        <ActionsWrapper>
          <Button variant="primary" href={code} target="_blank" rel="noreferrer">
            Code
          </Button>
          {demo && (
            <Button variant="secondary" href={demo} target="_blank" rel="noreferrer">
              Demo
            </Button>
          )}
        </ActionsWrapper>
      </Wrapper>
    </Card>
  );
}

export default ProjectCard;
