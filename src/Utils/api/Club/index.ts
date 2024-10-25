import { MutateOptions, useMutation, useQuery } from 'react-query';
import instance from '@/Utils/axios';
import { AxiosError } from 'axios';
import { clubListDefaultType } from '@/Models/ClubList';

const path = '/club'

/**
 * 동아리 조회 API
 * @params
 * @returns 동아리 전체 목록 조회 data
 */

export const useGetAllClubList = () => {
  return useQuery(['getAllClubList'], async() => {
    const { data } = await instance.get<clubListDefaultType>(`${path}`)
    return data
  })
}