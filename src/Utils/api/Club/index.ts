import { useMutation, useQuery } from "@tanstack/react-query";
import instance from '@/Utils/axios';
import { ClubListDefaultType, ClubType } from '@/Models/Manage';
import ApiError from '@/Utils/axios/ApiError';
import toast from 'react-hot-toast';

const path = '/club'

/**
 * 동아리 조회 API
 * @params
 * @returns 동아리 전체 목록 조회 data
 */

export const useGetClubList = () => {
  const { handleError } = ApiError();
  return useQuery<ClubListDefaultType, Error>({
    queryKey: ["ClubList"],
    queryFn: async () => {
      try {
        const response = await instance.get(`${path}`);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });
};

/**
 * 동아리 개별 추가 API
 * @params
 * @returns
 */

export const useAddClub = () => {
  const { handleError } = ApiError()

  return useMutation<{clubId: number}, Error, { isActive: boolean, clubName: string }>({
    mutationFn: async (params) => {
      try {
        const response = await instance.post(`${path}`, {
          is_active: params.isActive,
          club_name: params.clubName
        })
        toast.success("동아리가 성공적으로 추가되었습니다.", { duration: 1500 });
        return response.data;
      } catch(error: any) {
        if(error.response?.status === 409) {
          toast.error("입력하신 동아리 이름은 이미 존재합니다. 다른 이름을 입력해주세요.", { duration: 1500 })
        }
        handleError(error)
        throw error
      }
    }
  })
}

/**
 * 동아리 개별 상태 수정 API
 * @params clubId
 * @returns
 */

export const useModifyClub = () => {
  const { handleError } = ApiError()

  return useMutation<ClubType[], Error, { clubId: number }>({
    mutationFn: async({ clubId }) => {
      try {
        const response = await instance.patch(`${path}/modify/${clubId}`, { clubId });
        toast.success("동아리 정보 변경을 성공했습니다.", { duration: 1500 });
        return response.data
      } catch(error) {
        handleError(error)
        throw error
      }
    }
  })
}

/**
 * 동아리 개별 삭제 API
 * @params clubId
 * @returns
 */

export const useDeleteClub = () => {
  const { handleError } = ApiError()

  return useMutation<void, Error, { clubId: number }>({
    mutationFn: async (params) => {
      try {
        const response = await instance.delete(`${path}/${params.clubId}`);
        toast.success("동아리가 삭제되었습니다.", { duration: 1500 })
        return response.data
      } catch (error: any) {
        handleError(error)
        throw error
      }
    }
  })
}