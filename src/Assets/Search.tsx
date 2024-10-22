interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Search = ({ size = 24, color = '#000', onClick }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24" onClick={onClick}
    >
      <path fill={color} d="m21.75 20.063-5.816-5.818a7.523 7.523 0 0 0 1.44-4.433c0-4.17-3.393-7.562-7.562-7.562-4.17 0-7.562 3.392-7.562 7.562s3.392 7.562 7.562 7.562a7.523 7.523 0 0 0 4.433-1.44l5.818 5.816 1.687-1.688ZM9.812 14.986a5.174 5.174 0 1 1-.002-10.35 5.174 5.174 0 0 1 0 10.349Z" />
    </svg>
  )
}

