import axios, { AxiosError, AxiosResponse } from "axios";
import { useAuthStore } from "../store/useAuthStore";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // httpOnly 쿠키를 위한 설정
});

// Response Interceptor - 에러 처리
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 성공 응답은 그대로 반환
    return response;
  },
  (error: AxiosError) => {
    // 에러 처리
    if (error.response) {
      // 서버가 응답했지만 에러 상태 코드
      const status = error.response.status;
      const data = error.response.data as { message?: string; error?: string };

      switch (status) {
        case 401:
          // 인증 실패 - 토큰 만료 또는 유효하지 않은 토큰 (쿠키가 없거나 만료됨)
          // 로그인 상태를 false로 설정
          const { setLoggedIn } = useAuthStore.getState();
          setLoggedIn(false);
          // 로그인 페이지로 리다이렉트
          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
          break;

        case 403:
          // 권한 없음
          console.error("접근 권한이 없습니다.");
          break;

        case 404:
          // 리소스를 찾을 수 없음
          console.error("요청한 리소스를 찾을 수 없습니다.");
          break;

        case 500:
          // 서버 내부 오류
          console.error("서버 오류가 발생했습니다.");
          break;

        default:
          // 기타 에러
          console.error(`에러 발생: ${status}`);
      }

      // 에러 메시지가 있으면 반환
      const errorMessage = data?.message || data?.error || "알 수 없는 오류가 발생했습니다.";
      return Promise.reject({
        ...error,
        message: errorMessage,
        status,
      });
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못함 (네트워크 에러)
      console.error("네트워크 오류가 발생했습니다. 서버에 연결할 수 없습니다.");
      return Promise.reject({
        ...error,
        message: "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.",
      });
    } else {
      // 요청 설정 중 에러 발생
      console.error("요청 설정 중 오류가 발생했습니다.");
      return Promise.reject({
        ...error,
        message: "요청 처리 중 오류가 발생했습니다.",
      });
    }
  }
);

export default axiosInstance;