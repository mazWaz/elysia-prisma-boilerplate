export let refreshToken: string | null = null;

export const setAuthToken = (token: string) => {
  refreshToken = token;
};

export const getAuthHeaders = () => {
  if (!refreshToken) throw new Error('No auth token available');
  
  console.log(refreshToken);
  return {
    headers: {
      'Authorization': `Bearer ${refreshToken}`,
      'Content-Type': 'application/json'
    }
  };
};