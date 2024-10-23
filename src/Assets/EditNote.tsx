interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const EditNote = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="m18.13 12 1.26-1.26c.44-.44 1-.68 1.61-.74V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6v-1.87l.13-.13H5V5h7v7h6.13ZM14 4.5l5.5 5.5H14V4.5Zm5.13 9.33 2.04 2.04L15.04 22H13v-2.04l6.13-6.13Zm3.72.36-.98.98-2.04-2.04.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72Z" />
    </svg>
  )
}