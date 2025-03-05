import axios from "axios";

const Axios = axios.create({
  baseURL: "https://lookee.nwhco.ir/aapi",
});

export const getBarbers = async () => {
  try {
    const response = await Axios.get("/barbers/");
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return err.message;
    }
  }
};
