interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Heart = ({ size = 24, color = '#000', onClick }: PropsType) => {
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
        d="M2 9.245c0 4.863 4.02 7.454 6.962 9.774C10 19.837 11 20.607 12 20.607s2-.77 3.038-1.59C17.981 16.698 22 14.107 22 9.245S16.5.934 12 5.61C7.5.933 2 4.382 2 9.245Z"
      />
    </svg>
  )
}