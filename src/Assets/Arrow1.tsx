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

export const Arrow1 = ({ size = 24, color = '#000', rotate = 'left', onClick }: PropsType) => {
  const rotation = rotationAngles[rotate] || rotationAngles['left'];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation})` }}
      onClick={onClick}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 10 5 5 5-5"
      />
    </svg>
  )
}