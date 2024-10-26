interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Cancel = ({ size = 24, color = '#000', onClick }: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 46 45" onClick={onClick}>
      <path fill={color} d="m30.094 17.401-5.226 5.224 5.226 5.224a1.586 1.586 0 1 1-2.245 2.245l-5.224-5.226-5.224 5.226a1.586 1.586 0 1 1-2.245-2.245l5.226-5.224-5.226-5.224a1.587 1.587 0 1 1 2.245-2.245l5.224 5.226 5.224-5.226a1.586 1.586 0 1 1 2.245 2.245Zm13.156 5.224A20.625 20.625 0 1 1 22.625 2 20.647 20.647 0 0 1 43.25 22.625Zm-3.173 0a17.452 17.452 0 1 0-17.452 17.452 17.472 17.472 0 0 0 17.452-17.452Z" />
    </svg>
  )
}