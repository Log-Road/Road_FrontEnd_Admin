interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Reset = ({ size = 24, color = '#000', onClick }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 21 22"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.578 6.987A8 8 0 1 1 2.5 11"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.5 7h-4V3"
      />
    </svg>
  )
}