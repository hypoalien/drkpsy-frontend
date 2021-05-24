import axios from "axios";

const instance = axios.create({

  baseURL: "https://drkpsy-nodejs.herokuapp.com"
});

export default instance;