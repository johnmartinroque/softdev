import axios from "axios";

const API_URL = "http://localhost:5000/todos";

export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo list", error);
    return [];
  }
};
