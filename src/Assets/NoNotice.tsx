interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const NoNotice = ({ size = 24, color = '#000', onClick }: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 81 80" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M43.832 56.667h-30a13.333 13.333 0 0 0 6.667-10v-10a23.332 23.332 0 0 1 13.333-20 6.667 6.667 0 0 1 13.333 0 23.333 23.333 0 0 1 13.334 20v6.666m-30 13.334V60a10 10 0 0 0 13.98 9.177m29.353 4.156L57.165 56.667m0 16.666 16.667-16.666" />
    </svg>
  )
}