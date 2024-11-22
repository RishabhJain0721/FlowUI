import axios from "axios";

export const storeLog = async (log) => {
  try {
    const response = await axios.post("/api/log", { log });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllLogs = async () => {
  try {
    const response = await axios.get("/api/log");
    return response.data;
  } catch (error) {
    throw error;
  }
};
