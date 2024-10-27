import { useMutation, useQuery } from "@tanstack/react-query";
import instance from '@/Utils/axios';
import ApiError from '@/Utils/axios/ApiError';
import toast from 'react-hot-toast';
import { RecentContest, AwardingData, NoParticipateList, CategoryType } from "@/Models/Manage";

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

/**
 * 대회 시상 API
 * @params id
 * @returns 
 */

export const useAwarding = () => {
  const { handleError } = ApiError();

  return useMutation<void, Error, { id: string; data: AwardingData }>({
    mutationFn: async ({ id, data }) => {
      try {
        await instance.post(`${path}/awarding/${id}`, data);
        toast.success("대회 시상이 성공적으로 완료되었습니다", { duration: 1500 });
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });
};

/**
 * 투표율 조회 API
 * @params id
 * @returns 투표 data
 */

export const useGetVote = (id: string) => {
  const { handleError } = ApiError()

  return useQuery<{ student: number; teacher: number }, Error>({
    queryKey: ["Vote", id],
    queryFn: async () => {
      try {
        const response = await instance.get(`${path}/per/${id}`)
        return response.data
      } catch (error) {
        handleError(error)
        throw error
      }
    }
  })
}

/**
 * 투표 미참여 인원 리스트 조회 API
 * @params
 * @returns 미참여 리스트 data
 */

export const useGetUnVoteUsers = (id: string, category: CategoryType) => {
  const { handleError } = ApiError();

  return useQuery<NoParticipateList[], Error>({
    queryKey: ["UnVoteList", id, category],
    queryFn: async () => {
      try {
        const response = await instance.get(`${path}/list?id=${id}&category=${category}`);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    }
  });
};