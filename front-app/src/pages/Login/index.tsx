import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import UserServices from "../../services/UserServices";
import {AuthContext} from "../../contexts/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface loginData {
  email: string;
  password: string;
}

export default function Login() {
  const navigation = useNavigation();
  const Auth = React.useContext(AuthContext);
  const { control, handleSubmit, formState: { errors } } = useForm<loginData>();
  
  const onSubmit: SubmitHandler<loginData> = (data) => {
    UserServices.login(data).then(response => {
    Auth.setToken(response?.data.token);
    AsyncStorage.setItem("token",response?.data.token);
      if (response) {
        if (response.status === 202) {
          navigation.navigate("Tabs" as never);
        } 
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.title_format}>
        <Text style={styles.title}>Carioca</Text>
        <Text style={styles.title}>Experience</Text>
        <Image
          source={require("../../../assets/imgs/beach-palm-island-svg-png-icon-download-onlinewebfontsm-28.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.forms}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState }) => (
            <View style={styles.form_error} >
              <TextInput
                style={styles.TextInput}
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {fieldState.error && (
                <Text style={styles.errorText} >{fieldState.error.message}</Text>
              )}
            </View>
          )}
          name="email"
          rules={{
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email inválido",
            },
          }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState }) => (
            <View style={styles.form_error} >
              <TextInput
                style={styles.TextInput}
                placeholder="Senha"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {fieldState.error && (
                <Text style={styles.errorText}>{fieldState.error.message}</Text>
              )}
            </View>
          )}
          name="password"
          rules={{
            required: "Senha é obrigatória",
            minLength: {
              value: 7,
              message: "Senha deve ter pelo menos 7 caracteres",
            },
          }}
        />
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.button_text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn" as never)}>
        <Text style={styles.sign_up}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
