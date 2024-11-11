interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const BentArrow = ({ size = 24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 30 30">
      <path fill={color} d="M16.25 10v10a3.75 3.75 0 0 1-3.75 3.75H9.789a3.75 3.75 0 1 1 0-2.5h2.713A1.25 1.25 0 0 0 13.75 20V10a3.75 3.75 0 0 1 3.75-3.75h3.75V2.5l6.25 5-6.25 5V8.75H17.5A1.25 1.25 0 0 0 16.25 10Zm-10 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    </svg>
  )
}