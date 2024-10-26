import { FooterInformationType, SearchItemsType } from "@/Models"

export const FooterInformation: FooterInformationType[] = [
  {title: "DSM을 위한 프로젝트 저장소", info: "BackEnd 유나현 | FrontEnd 김호선 박예빈 임다영"},
  {title: "주소", info: "대전광역시 유성구 가정북로 76"},
  {title: "문의", info: "dsm.log@dsm.hs.kr"}
]

export const SearchItems: SearchItemsType[] = [
  { label: "학년", text: "학년 선택하기", options: ['1', '2', '3'] },
  { label: "반", text: "반 선택하기", options: ['1', '2', '3', '4'] },
  { label: "학년", text: "학년 선택하기", options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'] },
];