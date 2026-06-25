import { API_ENDPOINTS } from './API_ENDPOINTS';
export const API_ROUTES = {
    courses: {
      getAll: `${API_ENDPOINTS.courses}`,
      create: `${API_ENDPOINTS.courses}`,
      getById: (id: string) => `${API_ENDPOINTS.courses}/${id}`,
      update: (id: string) => `${API_ENDPOINTS.courses}/${id}`,
      delete: (id: string) => `${API_ENDPOINTS.courses}/${id}`,
    },
  };