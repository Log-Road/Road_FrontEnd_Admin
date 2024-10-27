import { useMutation, useQuery } from "@tanstack/react-query";
import instance from '@/Utils/axios';
import ApiError from '@/Utils/axios/ApiError';
import toast from 'react-hot-toast';
import { RecentContest } from "@/Models/Manage";

const path = '/competition'

/**
 * 최근 대회 조회 API
 * @params
 * @returns 최근 대회 data
 */

export const useGetRecentContest = () => {
  const { handleError } = ApiError()

  return useQuery<RecentContest[], Error>({
    queryKey: ["RecentContest"],
    queryFn: async () => {
      try {
        const response = await instance.get<RecentContest[]>(`${path}/recent`)
        return response.data
      } catch(error) {
        handleError(error)
        throw error
      }
    }
  })
}