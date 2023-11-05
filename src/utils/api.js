import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TOKEN_KEY = import.meta.env.VITE_APP_TOKEN_KEY

const headers = {
    Authorization: "bearer " + TOKEN_KEY
}

export const fetchDataFromApi = async (url,params)=>{
    try {
        const { data } = await axios.get(BASE_URL + url,{
            headers:headers,
            params:params
        })

        return data;

    } catch (error) {
        console.log(error)
        return error;
    }
}