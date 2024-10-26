interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Exchange = ({ size = 24, color = '#000', onClick }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill={color}
        d="M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1.004 1.004 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1Zm3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 1 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 0 1.42 1.001 1.001 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-1.09Z"
      />
    </svg>
  )
}