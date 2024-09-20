import { Link } from './styles';

interface SectionButtonProps {
  label: string;
  sectionId: string;
}

export function SectionButton({ label, sectionId }: SectionButtonProps) {
  return <Link href={`#${sectionId}`}>{label}</Link>;
}
