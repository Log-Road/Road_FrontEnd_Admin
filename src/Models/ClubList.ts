export interface ClubType {
  clubId: number,
  isActive: boolean,
  clubName: string
}

export interface ClubListDefaultType {
  clubs: ClubType[]
}