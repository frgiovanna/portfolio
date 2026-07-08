import { Link } from './styles';

interface SectionButtonProps {
  href?: string;
  isActive?: boolean;
  label: string;
  sectionId: string;
}

export function SectionButton({ href, isActive = false, label, sectionId }: SectionButtonProps) {
  return (
    <Link href={href || `#${sectionId}`} isActive={isActive} aria-current={isActive ? 'page' : undefined}>
      {label}
    </Link>
  );
}
