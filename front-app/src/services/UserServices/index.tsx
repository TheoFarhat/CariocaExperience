import api from "../api";
import { FormValues } from "../../pages/EditProfile";
interface loginData {
    email: string,
    password: string
}

interface signInData {
    email: string,
    password: string,
    cpf: string,
    name: string
}

interface tokenData{
    token: string;
}



export default {
    async login(data: loginData) {
        try {
            const response = api.post("/login", data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async createUser(data: signInData){
        try {
            const response = api.post('/user', data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async getDetail(token: tokenData){
        try {
            const response = api.get("/private/getDetails", {headers: {Authorization: "Bearer " + token.token}})
            return response;
        } catch (error) {
            
        }
    },
    async updateUser(token: tokenData, userData: FormValues) {
        try {
            const response = await api.put('/private/user', userData, {
                headers: {
                    Authorization: `Bearer ${token.token}`
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

     
}
