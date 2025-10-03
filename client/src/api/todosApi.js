import axios from "axios";

const API_URL = "http://localhost:5000/todos";

export const getTodosApi = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo list", error);
    return [];
  }
};

export const deleteTodoApi = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo", error);
    return null;
  }
};
