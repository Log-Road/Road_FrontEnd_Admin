import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "@/Utils/axios";
import ApiError from "@/Utils/axios/ApiError";
import toast from "react-hot-toast";
import { ProjectListType } from "@/Models/Manage";

const path = '/project'

/**
 * 프로젝트 목록 반환 API
 * @param
 * @returns 프로젝트 리스트 data
 */

export const useCategoryProjectList = (
  contest: string,
  status: string
) => {
  const { handleError } = ApiError()

  return useQuery<ProjectListType[], Error>({
    queryKey: ["CategoryProjectList", contest, status],
    queryFn: async () => {
      try {
        const response = await instance.get(`${path}/list?contest=${contest}&status=${status}`)
        return response.data
      } catch (error) {
        handleError(error)
        throw error
      }
    }
  })
}