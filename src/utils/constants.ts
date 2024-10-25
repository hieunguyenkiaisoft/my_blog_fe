const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

const ENDPOINTS = {
  USER: `${API_BASE_URL + "/users" as string}`,
};

export default ENDPOINTS;
