interface PropsType {
  size?: number,
  color?: string,
  rotate?: 'top' | 'bottom' | 'left' | 'right'
  onClick?: () => void
}

const rotationAngles: { [key: string]: string } = {
  right: '-90deg',
  top: '180deg',
  bottom: '0deg',
  left: '90deg',
};

export const Arrow2 = ({ size = 24, color = '#000', rotate = 'left', onClick }: PropsType) => {
  const rotation = rotationAngles[rotate] || rotationAngles['left'];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" style={{ transform: `rotate(${rotation})` }} onClick={onClick}>
      <path fill={color} d="M20.33 13.27a1.6 1.6 0 0 1 0 2.262l-7.2 7.2a1.6 1.6 0 0 1-2.262 0l-7.2-7.2A1.6 1.6 0 0 1 5.93 13.27l4.47 4.33V2.4a1.6 1.6 0 1 1 3.2 0v15.2l4.468-4.33a1.6 1.6 0 0 1 2.262 0Z" />
    </svg>
  )
}