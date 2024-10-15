import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_FACT_URL,
    headers: {
        'Accept': 'Application/json'
    }
})

export default {
    getFact() {
        return http.get(`/facts/random`);
    }
}