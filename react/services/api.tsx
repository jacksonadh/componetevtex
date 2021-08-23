import axios from "axios";

const api = axios.create({
  baseURL: "https://qj3nggde3c.execute-api.us-east-2.amazonaws.com",
});

export default api;