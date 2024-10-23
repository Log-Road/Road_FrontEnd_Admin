interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const NoMassage = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 32 32" onClick={onClick}>
      <path fill={color} d="m12.533 18.666 3.466-3.467 3.467 3.467 1.867-1.867-3.467-3.466 3.467-3.467-1.867-1.867-3.467 3.467-3.466-3.467-1.867 1.867 3.467 3.467-3.467 3.466 1.867 1.867ZM2.666 29.333v-24c0-.734.261-1.361.784-1.883a2.574 2.574 0 0 1 1.883-.784h21.333c.733 0 1.361.261 1.884.784.523.523.784 1.15.783 1.883v16c0 .733-.261 1.361-.783 1.884a2.562 2.562 0 0 1-1.884.782H7.999l-5.333 5.334Zm4.2-8h19.8v-16H5.333v17.5l1.533-1.5Z" />
    </svg>
  )
}