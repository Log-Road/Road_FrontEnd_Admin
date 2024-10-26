interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Check = ({ size = 24, color = '#000', onClick }: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 46 45" onClick={onClick}>
      <path fill={color} d="M19.706 30.589 11.75 22.63l2.651-2.65 5.305 5.302L30.31 14.676l2.653 2.653-13.258 13.26Z" />
      <path fill={color} fillRule="evenodd" d="M2.375 22.5C2.375 11.11 11.609 1.875 23 1.875c11.39 0 20.625 9.234 20.625 20.625 0 11.39-9.234 20.625-20.625 20.625-11.39 0-20.625-9.234-20.625-20.625ZM23 39.375a16.876 16.876 0 1 1 0-33.752 16.876 16.876 0 0 1 0 33.752Z" clipRule="evenodd" />
    </svg>
  )
}