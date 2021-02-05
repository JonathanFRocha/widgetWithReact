import Axios from "axios";

export default Axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2",
});
