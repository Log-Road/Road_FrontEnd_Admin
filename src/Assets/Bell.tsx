import { color as themeColor } from "@/Styles"

interface PropsType {
  size?: number,
  color?: string,
  isActive?: boolean,
  onClick?: () => void
}

export const Bell = ({ size = 24, color = '#000', isActive = false, onClick }: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} fillRule="evenodd" d="M14.456 2.475A6.586 6.586 0 0 0 5.455 7.86l-.252 2.266-.006.054a7 7 0 0 1-.94 2.782l-.027.047-.578.963-.024.04c-.242.403-.46.768-.606 1.077-.148.314-.307.74-.23 1.224a2 2 0 0 0 .69 1.222c.377.314.823.397 1.169.432.34.034.766.034 1.235.034h12.23c.469 0 .894 0 1.235-.034.345-.035.792-.118 1.167-.432a2 2 0 0 0 .692-1.222c.077-.483-.082-.91-.23-1.224-.146-.31-.364-.674-.606-1.077l-.024-.04-.578-.963-.028-.047a6.997 6.997 0 0 1-.815-2.047 5.022 5.022 0 0 1-2.045-.04 8.998 8.998 0 0 0 1.14 3.11l.033.053.578.963c.273.456.438.733.536.94l.014.032a1.443 1.443 0 0 1-.035.004c-.227.023-.55.024-1.081.024H5.933c-.531 0-.854-.001-1.082-.024a1.296 1.296 0 0 1-.034-.004l.014-.032c.098-.207.263-.484.536-.94l.578-.963.032-.053a9 9 0 0 0 1.207-3.577l.007-.06.252-2.267a4.586 4.586 0 0 1 5.893-3.882 5.003 5.003 0 0 1 1.12-1.724Zm2.527 1.804a2 2 0 0 0-.937 2.145c.12.225.222.46.305.707a1.998 1.998 0 0 0 2.203.793l-.007-.064a6.564 6.564 0 0 0-1.564-3.581Z" clipRule="evenodd" />
      <path stroke={color} strokeLinecap="round" strokeWidth="2" d="M9.104 17.666c.17.957.548 1.802 1.072 2.405.524.603 1.165.93 1.825.93.66 0 1.303-.327 1.827-.93s.9-1.448 1.072-2.405" />
      <path fill={isActive ? themeColor.blue[400] : color} d="M18 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>

  )
}