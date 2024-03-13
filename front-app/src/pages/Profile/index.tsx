import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { useContext,useState, useEffect } from "react";
import UserServices from "../../services/UserServices";

export default function Profile() {
    const navigation = useNavigation();
    const Auth = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState<any>(null); 

    const getUserDetails = () => {
        if (Auth.token) {
            UserServices.getDetail({ token: Auth.token }).then(response => {
                if (response && response?.data) {
                    setUserDetails(response?.data); 
                }
            }).catch(error => {
                console.error('Erro ao obter detalhes do usuário', error);
            });
        }
    };

    const reloadProfile = () => {
        getUserDetails();
    };

    useEffect(() => {
        getUserDetails(); 
    }, [Auth.token]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            reloadProfile(); 
        });

        return unsubscribe;
    }, [navigation]);


    return (
        <>
            <View style={styles.container}>
                <View style={styles.icon_box}>
                    <Ionicons name="person-circle-outline" size={90} color="black" />
                </View>
                <View>
                    <View style={styles.info}>
                        <Text style={styles.title}>
                            Nome:
                        </Text>
                        <Text style={styles.title}>
                            {userDetails?.user.name}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.title}>
                            Email:
                        </Text>
                        <Text style={styles.title}>
                            {userDetails?.user.email}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.title}>
                            CPF:
                        </Text>
                        <Text style={styles.title}>
                            {userDetails?.user.cpf}
                        </Text>
                    </View>
                    <View style={styles.info} >
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile" as never)}>
                            <Text style={styles.button_text}>
                                Editar Perfil
                            </Text>
                        </TouchableOpacity >
                    </View>
                </View>
            </View>
        </>
    );
}
