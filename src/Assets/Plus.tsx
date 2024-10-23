interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Plus = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z" />
    </svg>
  )
}