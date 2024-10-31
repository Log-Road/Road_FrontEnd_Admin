const fontGenerator = (
  weight: number | string,
  size: number,
  lineHeight: number,
  letterSpacing: number,
) => ({
  fontWeight: `${weight}`,
  fontSize: `${size}px`,
  lineHeight: `${lineHeight}%`,
  letterSpacing: `${letterSpacing}px`,
  fontFamily: `'Pretendard', sans-serif`
});

const font = {
  bold40: fontGenerator(700, 40, 160, 0),
  semi32: fontGenerator(600, 32, 160, 0),
  semi24: fontGenerator(600, 24, 140, 0),
  semi18: fontGenerator(600, 18, 140, 0),
  semi16: fontGenerator(600, 16, 140, 0),
  semi12: fontGenerator(600, 12, 140, 0),
  medium32: fontGenerator(500, 32, 140, 0),
  medium24: fontGenerator(500, 24, 140, 0),
  medium20: fontGenerator(500, 20, 140, 0),
  medium18: fontGenerator(500, 18, 140, 0),
  medium16: fontGenerator(500, 16, 140, 0),
  medium14: fontGenerator(500, 14, 140, 0),
  medium12: fontGenerator(500, 12, 140, 0),
  regular18: fontGenerator(400, 18, 140, 0),
  regular16: fontGenerator(400, 16, 140, 0),
  regular14: fontGenerator(400, 14, 140, 0),
  regular12: fontGenerator(400, 12, 140, 0),
};

export default font;
