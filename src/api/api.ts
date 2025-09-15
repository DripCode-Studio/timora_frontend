import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to login with Google OAuth
export const loginWithGoogle = async () => {
  window.location.href = `${
    import.meta.env.VITE_API_BASE_URL
  }/auth/google-auth`;
};
