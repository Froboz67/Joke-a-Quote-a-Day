import axios from "axios";

const category = "happiness"

const http = axios.create({
    baseURL: import.meta.env.VITE_QUOTE_URL,
    headers: {
        'X-Api-Key': 'GSsTXw4/H3DVzlBWYCLm1A==RQzJuTPhW2emcPIY',


    }
})

export default {
    getQuote() {
        return http.get(`?category=${category}`)
    }
}
