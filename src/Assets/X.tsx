interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const X = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 20 20" onClick={onClick}>
      <path fill={color} d="M16.289 14.961a.939.939 0 1 1-1.328 1.328L10 11.327l-4.962 4.96A.94.94 0 0 1 3.71 14.96L8.672 10l-4.96-4.961a.94.94 0 1 1 1.328-1.33L10 8.671l4.962-4.962a.94.94 0 1 1 1.328 1.328l-4.96 4.962 4.96 4.962Z" />
    </svg>
  )
}