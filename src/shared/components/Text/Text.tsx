import { theme } from '../../theme';
import { Body, H1, H2, H3, Huge, Large } from './styles';

type Variant = 'H1' | 'H2' | 'H3' | 'Huge' | 'Large' | 'Body';

interface TextProps {
  children: React.ReactNode;
  color?: keyof typeof theme.colors;
  variant?: Variant;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
}

export const Text = ({ children, color, variant = 'Body', fontSize, lineHeight, fontWeight }: TextProps) => {
  const setup = {
    H1: H1,
    H2: H2,
    H3: H3,
    Huge: Huge,
    Large: Large,
    Body: Body,
  };

  const Component = setup[variant];

  return (
    <Component color={color} fontSize={fontSize} lineHeight={lineHeight} fontWeight={fontWeight}>
      {children}
    </Component>
  );
};

// ***** Dot notation approach

// import * as Styles from './styles';

// type Props = { children: React.ReactNode; color?: string };

// type Variant = React.FC<Props>;

// type TextComponent = React.FC<Props> & {
//   Huge: Variant;
//   Large: Variant;
//   H1: Variant;
//   H2: Variant;
//   H3: Variant;
// };

// const Huge: Variant = ({ children, color }) => <Styles.Huge color={color}>{children}</Styles.Huge>;

// const Large: Variant = ({ children, color }) => <Styles.Large color={color}>{children}</Styles.Large>;

// const H1: Variant = ({ children, color }) => <Styles.H1 color={color}>{children}</Styles.H1>;

// const H2: Variant = ({ children, color }) => <Styles.H2 color={color}>{children}</Styles.H2>;

// const H3: Variant = ({ children, color }) => <Styles.H3 color={color}>{children}</Styles.H3>;

// export const Text: TextComponent = ({ children, color }) => <Styles.Body color={color}>{children}</Styles.Body>;

// Text.Huge = Huge;
// Text.Large = Large;
// Text.H1 = H1;
// Text.H2 = H2;
// Text.H3 = H3;
