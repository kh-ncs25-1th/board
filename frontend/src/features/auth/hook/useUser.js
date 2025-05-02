import { useCallback, useState } from "react"
import { userApi } from "../api/userApi";

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //회원가입처리
  const create = useCallback(async(data) => {
    setLoading(true);
    try {
      const respone = await userApi.create(data);
      return respone.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, create}
}