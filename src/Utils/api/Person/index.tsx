import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "@/Utils/axios";
import ApiError from "@/Utils/axios/ApiError";
import toast from "react-hot-toast";
import { PersonListDefaultType } from "@/Models/Manage";

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
      } catch(error) {
        handleError(error)
        throw error
      }
    }
  })
}