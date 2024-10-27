import { useMutation, useQuery } from "@tanstack/react-query";
import instance from '@/Utils/axios';
import ApiError from '@/Utils/axios/ApiError';
import toast from 'react-hot-toast';
import {
  ContestDetailType,
  ContestDefaultType,
  ContestCreate,
  ContestModify
} from "@/Models/Manage";

const path = '/competition'

/**
 * 대회 디테일 조회 API
 * @params id
 * @returns 대회 정보 Data
 */

export const useGetContestDetail = (id: string) => {
  const { handleError } = ApiError();

  return useQuery<ContestDetailType[], Error>({
    queryKey: ["ContestDetail", id],
    queryFn: async () => {
      try {
        const response = await instance.get<ContestDetailType[]>(`${path}/inform/${id}`);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    enabled: !! id
  });
};

/**
 * 대회 목록 조회 API
 * @params page
 * @returns 대회 목록 data
 */

export const useGetContestList = (page: string) => {
  const { handleError } = ApiError()

  return useQuery<ContestDefaultType[], Error>({
    queryKey: ["ContestList", page],
    queryFn: async () => {
      try {
        const response = await instance.get<ContestDefaultType[]>(`${path}/:${page}`)
        return response.data
      } catch(error) {
        handleError(error);
        throw error;
      }
    }
  })
}

/**
 * 대회 생성 API
 * @params
 * @returns id
 */

export const useAddContest = () => {
  const { handleError } = ApiError()

  return useMutation<{ id: string }, Error, ContestCreate[]>({
    mutationFn: async (data: ContestCreate[]) => {
      try {
        const response = await instance.post(`${path}`, data)
        toast.success("대회가 성공적으로 생성되었습니다.", { duration: 1500 });
        return response.data
      } catch(error) {
        handleError(error)
        throw error
      }
    }
  })
}

/**
 * 대회 수정 API
 * @params
 * @returns id
 */

export const useEditContest = () => {
  const { handleError } = ApiError();

  return useMutation<{ id: string }, Error, { id: string; data: ContestModify }>({
    mutationFn: async ({ id, data }) => {
      try {
        const response = await instance.patch(`${path}/${id}`, data);
        toast.success("대회가 성공적으로 수정되었습니다", { duration: 1500 });
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });
};