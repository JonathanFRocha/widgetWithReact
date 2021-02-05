import Axios from "axios";

export default Axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
  },
});
