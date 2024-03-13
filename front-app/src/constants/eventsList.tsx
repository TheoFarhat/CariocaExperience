import pracaXv from "../../assets/imgs/pracaxv.jpg";
import pedraDaGavea from "../../assets/imgs/pedra-da-gavea.jpg";
import producao from "../../assets/imgs/producao-musical.jpg";
import yoga from "../../assets/imgs/yoga-praia.jpg";
import { ImageProps } from "react-native";

export interface Events {
    index: number;
    title: string;
    image: ImageProps["source"];
    description: string;
    data: string;
    place: string;
    is_paid: boolean;
    price: string;

}

export const eventsList: Events[] = [
    {
        index:1,
        title: "Yoga na praia de Ipanema",
        image: yoga,
        description: "Aula conjunta de Yoga na areia da praia de Ipanema",
        data: "15 de agosto 7:30h",
        place: "Em frente ao posto 9",
        is_paid: true,
        price: "Preço: 75.00"
    },
    {
        index:2,
        title: "Aula de produção musical",
        image: producao,
        description: "Aula de produção musical com um dos maiores DJs cariocas",
        data: "17 de agosto 17:30h",
        place: "Galeria River - Copacabana",
        is_paid: true,
        price: "Preço: 40.00"
    },
    {
        index:3,
        title: "Excursão na Pedra da Gavea",
        image: pedraDaGavea,
        description: "Excursão com guia profissional para a trilha da Pedra da Gavea",
        data: "18 de agosto 6:30h",
        place: "Praça Professor Velho da Silva - Barinha",
        is_paid: false,
        price: "Preço: Gratuíto"
    },
    {
        index:4,
        title: "Exposição de arte e cultura",
        image: pracaXv,
        description: "Exposição cultural com diversos artistas e músicos",
        data: "20 de agosto 9:00h",
        place: "Praça XV - Centro",
        is_paid: false,
        price: "Preço: Gratuíto"
    },
    
    
]