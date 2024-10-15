import { useState, useEffect } from 'react';
import axios from 'axios';
import ENDPOINTS from '@/utils/constants';
import useHeader from './useHeader';

const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const headers = useHeader();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const res = await axios.get(ENDPOINTS.USER, { headers });

        setUser(res.data);
      } catch (err: any) {

        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useCurrentUser;
