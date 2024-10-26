type StatusType = "ENROLL" | "GRADUATE" | "WITHDRAWAL" | "ABSENCE"
type ContestStatusType = "ONGOING" | "IN_PROGRESS" | "PENDING_AWARD" | "CLOSED"

export const PersonStatus = (status: StatusType) => {
  switch(status) {
    case "ENROLL":
      return "재학중"
    case "GRADUATE":
      return "졸업"
    case "WITHDRAWAL":
      return "전학?자퇴"
    case "ABSENCE":
      return "휴학"
    default: return "ERROR"
  }
}

export const ContestStatus = (status: ContestStatusType) => {
  switch(status) {
    case "ONGOING":
      return "시작전"
    case "IN_PROGRESS":
      return "진행중"
    case "PENDING_AWARD":
      return "시상대기"
    case "CLOSED":
      return "종료"
    default: return "ERROR"
  }
}