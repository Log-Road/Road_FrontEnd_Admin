interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Plane = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 28 28" onClick={onClick}>
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m14 21-2.334-4.667-8.167-4.083a.642.642 0 0 1 0-1.167l21-7.583-4.218 11.684m-1.615 10.483 5.833-5.834m0 0v5.25m0-5.25h-5.25" />
    </svg>
  )
}