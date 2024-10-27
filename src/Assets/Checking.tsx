interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Checking = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 20 21" onClick={onClick}>
      <path fill={color} fillRule="evenodd" d="M16.86 4.787a.936.936 0 0 1 .102 1.322l-7.5 8.75a.937.937 0 0 1-1.375.053l-4.375-4.375a.938.938 0 0 1 1.326-1.325l3.66 3.659 6.842-7.982a.937.937 0 0 1 1.32-.102Z" clipRule="evenodd" />
    </svg>
  )
}