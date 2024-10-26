interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Delete = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 28 28" onClick={onClick}>
      <path fill={color} d="M10.5 19.833h2.333v-10.5h-2.334v10.5Zm4.666 0h2.333v-10.5h-2.333v10.5ZM5.833 24.5V7H4.666V4.667h5.833V3.5h7v1.167h5.834V7h-1.167v17.5H5.833Z" />
    </svg>
  )
}