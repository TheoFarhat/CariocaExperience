import pracaXv from "../../assets/imgs/pracaxv.jpg";
import producao from "../../assets/imgs/producao-musical.jpg";
import { ImageProps } from "react-native";

export interface myEvents {
    index: number;
    title: string;
    image: ImageProps["source"];
    description: string;
    data: string;
    place: string;
    is_paid: boolean;
    price: string;

}

export const myEventsList: myEvents[] = [
    {
        index:1,
        title: "Aula de produção musical",
        image: producao,
        description: "Aula de produção musical com um dos maiores DJs cariocas",
        data: "17 de agosto 17:30h",
        place: "Galeria River - Copacabana",
        is_paid: true,
        price: "Preço: 40.00"
    },
    {
        index:2,
        title: "Exposição de arte e cultura",
        image: pracaXv,
        description: "Exposição cultural com diversos artistas e músicos",
        data: "20 de agosto 9:00h",
        place: "Praça XV - Centro",
        is_paid: false,
        price: "Preço: Gratuíto"
    },
    
    
]