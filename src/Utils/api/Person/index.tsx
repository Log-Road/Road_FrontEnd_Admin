import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "@/Utils/axios";
import ApiError from "@/Utils/axios/ApiError";
import toast from "react-hot-toast";
import { PersonListDefaultType, PersonType, PersonStatusType } from "@/Models/Manage";

const path = '/person'

/**
 * 인원 조회 API
 * @params
 * @returns 인원 전체 목록 조회 data
 */

export const useGetPersonList = () => {
  const { handleError } = ApiError()

  return useQuery<PersonListDefaultType[], Error>({
    queryKey: ["PersonList"],
    queryFn: async () => {
      try {
        const response = await instance.get<PersonListDefaultType[]>(`${path}`)
        return response.data
      } catch (error) {
        handleError(error)
        throw error
      }
    }
  })
}

/**
 * 인원 검색 API
 * @params grade / class / status / query
 * @returns 검색 결과 data
 */

export const useSearchPerson = (
  grade: number | null,
  classNumber: number | null,
  status: PersonStatusType | null,
  query: string | null
) => {
  const { handleError } = ApiError();

  return useQuery<PersonListDefaultType[], Error>({
    queryKey: ["PersonList", grade, classNumber, status, query],
    queryFn: async () => {
      try {
        const response = await instance.get<PersonListDefaultType[]>(`${path}/search`, {
          params: {
            grade,
            class: classNumber,
            status,
            query,
          },
        });
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });
};

/**
 * 인원 개별 수정 API
 * @params grade / class / status / query
 * @returns 성공시
 */

export const useEditPerson = (
  grade: number | null,
  classNumber: number | null,
  status: PersonStatusType | null,
  query: string | null
) => {
  const { handleError } = ApiError();

  return useMutation<PersonType[], Error, { personId: number }>({
    mutationFn: async ({ personId }) => {
      try {
        const response = await instance.patch(`${path}/individual/${personId}`, {
          grade,
          class: classNumber,
          status,
          query,
        });
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });
};