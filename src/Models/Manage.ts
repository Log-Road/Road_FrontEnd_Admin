export interface ClubType {
  clubId: number,
  isActive: boolean,
  clubName: string
}

export interface ClubListDefaultType {
  clubs: ClubType[]
}

type ClubStatusType = "ENROLL" | "GRADUATE" | "WITHDRAWAL" | "ABSENCE"

export interface PersonType {
  personId: number,
  grade: number,
  class: number,
  number: number,
  name: string,
  status: ClubStatusType
}

export interface PersonListDefaultType {
  arr: PersonType[]
}

type ContestStatusType = "ONGOING" | "IN_PROGRESS" | "PENDING_AWARD" | "CLOSED"

export interface ContestType {
  id: string,
  status: ContestStatusType,
  name: string,
  startDate: string,
  endDate: string
}

export interface ContestDefaultType {
  data: {
    list: ContestType[];
  };
  statusCode: number;
  statusMsg: string;
}
