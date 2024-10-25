import { MutateOptions, useMutation, useQuery } from 'react-query';
import instance from '@/Utils/axios';
import { AxiosError } from 'axios';
import { clubListDefaultType } from '@/Models/ClubList';
import ApiError from '@/Utils/axios/ApiError';

const path = '/club'

/**
 * 동아리 조회 API
 * @params
 * @returns 동아리 전체 목록 조회 data
 */

export const useGetAllClubList = () => {
  const { handleError } = ApiError()
  
  return useQuery(['getAllClubList'], async() => {
    try {
      const { data } = await instance.get<clubListDefaultType>(`${path}`)
      return data
    } catch(error) {
      handleError(error)
    }
  })
}

/**
 * 동아리 개별 추가 API
 * @params
 * @returns 동아리 ID
 */

export const useAddClub = (isActive: boolean, clubName: string) => {
  const { handleError } = ApiError()
  
  return useMutation(
    async () => {
      try {
        const response = await instance.post(`${path}`,{
          isActive,
          clubName
      })
        return response.data
      } catch(error: any) {
        if(error.response?.status === 409) {
          console.log("동아리 이름이 중복되었습니다")
        }
        handleError(error)
      }}
  )
}