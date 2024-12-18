export interface ClubType {
  club_id: string,
  is_active: boolean,
  club_name: string
}

export interface ClubListDefaultType {
  clubs: ClubType[]
}

export interface ClubListInfoType {
  data: ClubListDefaultType,
  statusCode: number,
  statusMsg: string
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

export type ContestStatusType = "ONGOING" | "IN_PROGRESS" | "PENDING_AWARD" | "CLOSED"

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

export interface ContestGetDetailType {
  data: ContestDetailType[]
  statusCode: number,
  statusMsg: string
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

export interface ContestModify {
  name: string,
  status: ContestStatusType,
  startDate: string,
  endDate: string,
  purpose: string,
  audience: string,
  place: string,
  awards: Award[]
}

export interface RecentContest {
  data: {
    list: ContestType[]
  }
  statusCode: number,
  statusMsg: string
}

export interface AwardItem {
  awardId: string;
  userId: string[];
}

export interface AwardingData {
  list: AwardItem[];
}

export type CategoryType = "Student" | "Teacher";

export interface NoParticipate {
  id: string,
  name: string,
  number: number,
  category: CategoryType
}

export interface NoParticipateList {
  data: {
    list: NoParticipate[]
  },
  statusCode: number,
  statusMsg: string
}

export interface ProjectType {
  id: string,
  status: string,
  name: string,
  image: string,
  authorCategory: string,
  member: Array<string>,
  introduction: string,
  createdAt: string,
  like: number
}

export interface ProjectListType {
  list: ProjectType[]
}

export interface InputType {
  property?: string,
  label?: string,
  placeholder: string
}

export interface FormState {
  id: string,
  name: string,
  status: ContestStatusType,
  startDate: string,
  endDate: string,
  purpose: string,
  place: string,
  audience: string,
  awardName: string,
  awards: [{name: string, count: number}]
}