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
          params: {
            grade,
            class: classNumber,
            status,
            query,
          }
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
 * 인원 문서 추가 API
 * @params
 * @returns
 */

export const useAddDocument = () => {
  const { handleError } = ApiError();

  return useMutation<void, Error, { document: DocumentType }>({
    mutationFn: async ({ document }) => {
      try {
        await instance.post(`${path}/document`, {
          document,
        });
        toast.success("파일이 성공적으로 업로드 되었습니다.", { duration: 1500 });
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });
};

/**
 * 인원 문서 수정 API
 * @params 
 * @returns
 */

export const useEditDocument = () => {
  const { handleError } = ApiError()

  return useMutation<void, Error, { document: DocumentType }>({
    mutationFn: async ({ document }) => {
      try {
        await instance.patch(`${path}/document`, {
          document
        })
        toast.success("파일이 성공적으로 업로드 되었습니다.", { duration: 1500 });
      } catch(error) {
        handleError(error);
        throw error;
      }
    }
  })
}