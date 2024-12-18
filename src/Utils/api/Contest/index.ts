import { useMutation, useQuery } from "@tanstack/react-query";
import instance from '@/Utils/axios';
import ApiError from '@/Utils/axios/ApiError';
import toast from 'react-hot-toast';
import {
  ContestGetDetailType,
  ContestDefaultType,
  ContestCreate,
  ContestModify
} from "@/Models/Manage";
import { useModal } from "@/Context/ModalContext";
import { useQueryClient } from "react-query";

const path = '/competition'

/**
 * 대회 디테일 조회 API
 * @params id
 * @returns 대회 정보 Data
 */

export const useGetContestDetail = (id: string) => {
  const { handleError } = ApiError();

  return useQuery<ContestGetDetailType, Error>({
    queryKey: ["ContestDetail", id],
    queryFn: async () => {
      try {
        const response = await instance.get<ContestGetDetailType>(`${path}/inform/${id}`);
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

  return useQuery({
    queryKey: ["ContestList", page],
    queryFn: async () => {
      try {
        const { data } = await instance.get<ContestDefaultType>(`${path}/${page}`)
        return data
      } catch(error: any) {
        console.error("ERROR", error.response.data)
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

  return useMutation<{ id: string }, Error, ContestCreate>({
    mutationFn: async (data: ContestCreate) => {
      try {
        const response = await instance.post(`${path}`, data)
        toast.success("대회가 성공적으로 생성되었습니다.", { duration: 1500 });
        return response.data
      } catch(error: any) {
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

/**
 * 대회 삭제 API
 * @params id
 * @returns
 */

export const useDeleteContest = () => {
  const { handleError } = ApiError()
  const { closeModal } = useModal()

  return useMutation<void, Error, string>({
    mutationFn: async (contestId) => {
      try {
        await instance.delete(`${path}/${contestId}`)
        closeModal()
        toast.success("대회가 삭제되었습니다.", { duration: 1500 })
      } catch (error: any) {
        handleError(error)
        throw error
      }
    }
  })
}