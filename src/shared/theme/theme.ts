export const theme = {
  breakpoints: {
    xxs: {
      width: 0,
      margin: 20,
      gutter: 16,
    },
    xs: {
      width: 360,
      margin: 20,
      gutter: 16,
    },
    sm: {
      width: 480,
      margin: 20,
      gutter: 16,
    },
    md: {
      width: 768,
      margin: 20,
      gutter: 16,
    },
    lg: {
      width: 1024,
      margin: 71,
      gutter: 24,
    },
    xl: {
      width: 1200,
      margin: 71,
      gutter: 24,
    },
    xxl: {
      width: 1366,
      margin: 71,
      gutter: 24,
    },
    xxxl: {
      width: 1600,
      margin: 71,
      gutter: 24,
    },
  },
  colors: {
    cloud: '#FFFFFF',
    dawn: '#3E3E3E',
    evening: '#FE9F9F',
    fog: '#FFF7F0',
    misty: '#F2F2F2',
    morning: '#FFCDCD',
    night: '#10375E',
    sky: '#D0E5FA',
    twilight: '#1D63A6',
    light: '#ffdfdf',
    midnight: '#0A2744',
  },
  gradients: {
    cloud: `
      linear-gradient(120deg, rgba(254, 159, 159, 0.22) 0%, transparent 44%),
      linear-gradient(180deg, #FFFFFF 0%, rgba(255, 223, 223, 0.5) 100%)
    `,
    dawn: `
      linear-gradient(120deg, rgba(254, 159, 159, 0.18) 0%, transparent 48%),
      linear-gradient(135deg, #3E3E3E 0%, #10375E 100%)
    `,
    evening: `
      linear-gradient(120deg, rgba(255, 255, 255, 0.34) 0%, transparent 52%),
      linear-gradient(135deg, #FE9F9F 0%, #FFCDCD 100%)
    `,
    fog: `
      linear-gradient(120deg, rgba(208, 229, 250, 0.68) 0%, transparent 48%),
      linear-gradient(300deg, rgba(254, 159, 159, 0.34) 0%, transparent 50%),
      #FFF7F0
    `,
    misty: `
      linear-gradient(120deg, rgba(208, 229, 250, 0.52) 0%, transparent 50%),
      linear-gradient(180deg, #F2F2F2 0%, #FFFFFF 100%)
    `,
    morning: `
      linear-gradient(120deg, rgba(255, 255, 255, 0.44) 0%, transparent 42%),
      linear-gradient(300deg, rgba(208, 229, 250, 0.58) 0%, transparent 54%),
      linear-gradient(135deg, #FE9F9F 0%, #FFCDCD 42%, #FFF7F0 76%, #D0E5FA 132%)
    `,
    night: `
      linear-gradient(120deg, rgba(254, 159, 159, 0.2) 0%, transparent 52%),
      linear-gradient(135deg, #10375E 0%, #0A2744 100%)
    `,
    sky: `
      linear-gradient(120deg, rgba(255, 255, 255, 0.46) 0%, transparent 44%),
      linear-gradient(135deg, #9FCBF5 0%, #D0E5FA 48%, #FFF7F0 100%)
    `,
    twilight: `
      linear-gradient(120deg, rgba(255, 205, 205, 0.2) 0%, transparent 52%),
      linear-gradient(135deg, #1D63A6 0%, #10375E 100%)
    `,
    light: `
      linear-gradient(120deg, rgba(208, 229, 250, 0.5) 0%, transparent 48%),
      linear-gradient(180deg, #FFCDCD 0%, #ffdfdf 54%, #FFF7F0 100%)
    `,
    card: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(255, 247, 240, 0.9))',
    cardHover: 'linear-gradient(135deg, rgba(254, 159, 159, 0.18), rgba(208, 229, 250, 0.18))',
    darkText: 'linear-gradient(135deg, #10375E, #1D63A6)',
    brandText: 'linear-gradient(135deg, #10375E 0%, #1D63A6 58%, #FE9F9F 120%)',
    brandLine: 'linear-gradient(90deg, #FE9F9F, #1D63A6)',
    brandSurface: 'linear-gradient(135deg, #FE9F9F, #FFCDCD)',
    mediaLinksSurface:
      'linear-gradient(145deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 223, 223, 0.86) 38%, rgba(255, 205, 205, 0.68) 70%, rgba(255, 247, 240, 0.78) 100%)',
    menuSurface: 'linear-gradient(135deg, #FFFFFF, #FFF7F0)',
    softContact: 'linear-gradient(135deg, #FFFFFF, #ffdfdf)',
    timelineConnector: 'linear-gradient(180deg, #FFCDCD, #D0E5FA)',
    sectionIntroduction: `
      linear-gradient(128deg, rgba(254, 159, 159, 0.5) 0%, rgba(255, 223, 223, 0.78) 34%, rgba(255, 247, 240, 0.9) 66%, rgba(208, 229, 250, 0.7) 118%),
      linear-gradient(215deg, rgba(255, 255, 255, 0.76) 0%, transparent 42%)
    `,
    sectionFindMe: 'linear-gradient(160deg, rgba(255, 247, 240, 0.92) 0%, rgba(208, 229, 250, 0.84) 46%, rgba(159, 203, 245, 0.88) 100%)',
    sectionInterests: 'linear-gradient(150deg, rgba(255, 247, 240, 1) 0%, rgba(255, 223, 223, 0.72) 52%, rgba(254, 159, 159, 0.32) 118%)',
    sectionSkills: 'linear-gradient(145deg, rgba(208, 229, 250, 0.82) 0%, rgba(255, 247, 240, 0.86) 48%, rgba(255, 205, 205, 0.5) 128%)',
    sectionContact: 'linear-gradient(150deg, rgba(255, 255, 255, 0.92) 0%, rgba(159, 203, 245, 0.62) 52%, rgba(255, 223, 223, 0.56) 100%)',
  },
  shadows: {
    sm: '0 8px 18px rgba(16, 55, 94, 0.08)',
    md: '0 16px 40px rgba(16, 55, 94, 0.08)',
    lg: '0 22px 58px rgba(16, 55, 94, 0.1)',
    card: '0 18px 48px rgba(16, 55, 94, 0.08)',
    cardHover: '0 24px 68px rgba(16, 55, 94, 0.14)',
    focus: '0 10px 22px rgba(254, 159, 159, 0.26)',
    image: 'drop-shadow(0 22px 30px rgba(16, 55, 94, 0.14))',
    imageLarge: 'drop-shadow(0 28px 36px rgba(16, 55, 94, 0.18))',
  },
  radii: {
    sm: '12px',
    md: '18px',
    lg: '22px',
    xl: '24px',
    xxl: '28px',
    pill: '999px',
  },
  borders: {
    subtle: '1px solid rgba(16, 55, 94, 0.06)',
    cloud: '1px solid rgba(255, 255, 255, 0.58)',
    cloudStrong: '1px solid rgba(255, 255, 255, 0.76)',
    accentLeft: '4px solid #FE9F9F',
  },
  surfaces: {
    cloudLight: 'rgba(255, 255, 255, 0.32)',
    cloud: 'rgba(255, 255, 255, 0.42)',
    cloudStrong: 'rgba(255, 255, 255, 0.58)',
    fogGlass: 'rgba(255, 247, 240, 0.82)',
    lightGlass: 'rgba(255, 223, 223, 0.76)',
    lightStrong: 'rgba(255, 223, 223, 0.86)',
    skyGlass: 'rgba(208, 229, 250, 0.46)',
  },
  insetShadows: {
    cloud: 'inset 0 0 0 1px rgba(255, 255, 255, 0.42)',
    cloudStrong: 'inset 0 0 0 1px rgba(255, 255, 255, 0.58)',
    night: 'inset 0 0 0 1px rgba(16, 55, 94, 0.08)',
  },
  transitions: {
    default: '180ms ease',
    slow: '280ms ease',
    reveal: '560ms cubic-bezier(0.22, 1, 0.36, 1)',
  },
  fontFamily: {
    abrilFatFace: "'Abril Fatface', cursive",
    quicksand: "'Quicksand', sans-serif",
  },
};
