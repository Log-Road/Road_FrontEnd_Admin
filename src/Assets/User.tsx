interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void,
}

export const User = ({size=24, color='#000', onClick}: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} fill-rule="evenodd" d="M12 13c2.396 0 4.575.694 6.178 1.672.8.488 1.484 1.064 1.978 1.69.486.615.844 1.351.844 2.138 0 .845-.411 1.511-1.003 1.986-.56.45-1.299.748-2.084.956-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139.494-.625 1.177-1.2 1.978-1.69C7.425 13.695 9.605 13 12 13Zm0 2c-2.023 0-3.843.59-5.136 1.379-.647.394-1.135.822-1.45 1.222-.324.41-.414.72-.414.899 0 .122.037.251.255.426.249.2.682.407 1.344.582C7.917 19.858 9.811 20 12 20c2.19 0 4.083-.143 5.4-.492.663-.175 1.096-.382 1.345-.582.218-.175.255-.304.255-.426 0-.18-.09-.489-.413-.899-.316-.4-.804-.828-1.451-1.222C15.843 15.589 14.023 15 12 15Zm0-13a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd" />
    </svg>
  )
}