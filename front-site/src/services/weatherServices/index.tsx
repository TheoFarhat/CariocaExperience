import api from "../api";

export default {
    async getWeather() {
        try {
            const response = api.get("/weather");
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}