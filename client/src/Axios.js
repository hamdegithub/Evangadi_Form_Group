import axios from "axios";

const Axios = () => {
  return axios.create({
    baseURL: "http://localhost:5000/", // the url of our server
  });
};

export default Axios;
