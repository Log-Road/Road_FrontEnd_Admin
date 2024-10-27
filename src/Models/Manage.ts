export interface ClubType {
  clubId: number,
  isActive: boolean,
  clubName: string
}

export interface ClubListDefaultType {
  clubs: ClubType[]
}

export type PersonStatusType = "ENROLL" | "GRADUATE" | "WITHDRAWAL" | "ABSENCE"

export interface PersonType {
  personId: number,
  grade: number,
  class: number,
  number: number,
  name: string,
  status: PersonStatusType
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

export interface ContestDetailType {
  id: string,
  name: string,
  status: ContestStatusType,
  startDate: string,
  endDate: string,
  purpose: string,
  place: string,
  audience: string
}

type Award = {
  name: string,
  count: number
}

export interface ContestCreate {
  name: string,
  startDate: string,
  endDate: string,
  purpose: string,
  audience: string,
  place: string,
  awards: Award[]
}