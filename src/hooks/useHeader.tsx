import { useState, useEffect } from 'react';

const useHeader = () => {
  const [headers, setHeaders] = useState<Record<string, string>>({});

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  }, []);

  return headers;
};

export default useHeader;
