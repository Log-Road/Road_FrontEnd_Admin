import { useCallback } from "react";

type ErrorHandler = () => void

type HandleType = {
  [key: string]: ErrorHandler
}

const ApiError = () => {

  const handle400: ErrorHandler = () => {
    alert("Bad Request, 요청 값 오류")
  }

  const handle401: ErrorHandler = () => {
    alert("Unauthorized, 인증되지 않은 사용자의 접근")
  }

  const handle403: ErrorHandler = () => {
    alert("Forbidden, 인증되었지만 권한이 없는 사용자의 접근")
  }

  const handle404: ErrorHandler = () => {
    alert("Not Found")
  }

  const handle500: ErrorHandler = () => {
    alert("Internal Server Error, 데이터베이스 트랜잭션 오류")
  }

  const handleDefault: ErrorHandler = () => {
    alert("알 수 없는 오류가 발생하였습니다")
  }

  const defaultHandlers: HandleType = {
    "400": handle400,
    "401": handle401,
    "403": handle403,
    "404": handle404,
    "500": handle500,
    default: handleDefault,
  }

  const handleError = useCallback((error: any) => {
    const httpStatus = error.response?.status

    if (httpStatus) {
      const selectErrorHandler: ErrorHandler = defaultHandlers[httpStatus] || defaultHandlers.default;
      selectErrorHandler();
    } else {
      alert(`오류가 발생했습니다 ${error.message}`);
    }
  }, [])
  
  return { handleError }
}

export default ApiError