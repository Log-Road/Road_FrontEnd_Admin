interface PropsType {
  size?: number,
  color?: string,
  onClick?: () => void
}

export const Link = ({ size = 24, color = '#000', onClick }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.011 8.156a2.826 2.826 0 0 0-3.996 0l-2.854 2.855a2.825 2.825 0 0 0 3.996 3.995l.268-.253m-.268-3.742a2.825 2.825 0 0 0 3.996 0l2.853-2.855a2.825 2.825 0 0 0-3.995-3.996l-.856.801"
      />
    </svg>
  )
}