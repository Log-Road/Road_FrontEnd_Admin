import { MutateOptions, useMutation, useQuery } from 'react-query';
import instance from '@/Utils/axios';
import { AxiosError } from 'axios';
import { clubListDefaultType } from '@/Models/ClubList';
import ApiError from '@/Utils/axios/ApiError';
import toast from 'react-hot-toast';

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
 * @returns
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
      toast.success("동아리가 성공적으로 추가되었습니디.", { duration: 1500 })
      return response.data
      } catch(error: any) {
        if(error.response?.status === 409) {
          toast.error("입력하신 동아리 이름은 이미 존재합니다. 다른 이름을 입력해주세요.", { duration: 1500 })
        }
        handleError(error)
      }}
  )
}

/**
 * 동아리 개별 상태 수정 API
 * @params clubID
 * @returns
 */

export const useModifyClub = (clubID: number) => {
  const { handleError } = ApiError();

  return useMutation(async () => {
    try {
      const response = await instance.patch(`${path}/modify/${clubID}`, { clubID });
      toast.success("동아리 정보 변경을 성공했습니다.", { duration: 1500 });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  });
}
