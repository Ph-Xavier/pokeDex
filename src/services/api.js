import Axios from "axios";

const pokeApi = Axios.create({
  baseURL: "https://pokeapi.co",
});

export default pokeApi;
