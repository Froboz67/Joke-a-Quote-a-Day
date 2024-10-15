import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_JOKE_URL,
    headers: {
        'Accept': 'Application/json'
    }
})

export default {
    getJoke() {
       return http.get();
    }
}