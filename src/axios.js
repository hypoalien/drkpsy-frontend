import axios from "axios";

const instance = axios.create({

  baseURL: "https://drkpsy-nodejs.herokuapp.com"
  // baseURL: "https://localhost:5000"
});

export default instance;