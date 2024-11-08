import { HeaderInformationType, FooterInformationType, SearchItemsType } from "@/Models"

export const HeaderInformation: HeaderInformationType[] = [
  { name: "clubManage", text: "대회관리", path: "/contest"},
  { name: "personManage", text: "인원관리", path: "/person"},
  { name: "clubManage", text: "동아리 관리", path: "/club"}
]

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

export const CategoryItems = [
  {category: "PERSONAL", text: "개인"},
  {category: "TEAM", text: "팀"},
  {category: "CLUB", text: "동아리"}
]
