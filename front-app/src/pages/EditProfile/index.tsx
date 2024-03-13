import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import UserServices from "../../services/UserServices";

export interface FormValues {
  name: string;
  email: string;
  cpf: string;
}

export default function EditProfile() {
  const Auth = useContext(AuthContext);
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
        const response = await UserServices.updateUser({ token: Auth.token }, data);
        if (response && response.status === 202) {
            console.log('Perfil atualizado com sucesso!');
            navigation.navigate("Profile" as never);
        }
    } catch (error) {
        console.error('Erro ao atualizar perfil', error);
    }
};
  return (
    <View style={styles.container}>
      <View style={styles.icon_box}>
        <Ionicons name="person-circle-outline" size={90} color="black" />
        <Text style={styles.title}>
          Editar Perfil
        </Text>
      </View>
      <View>
        <View style={styles.info}>
          <Text style={styles.title}>
            Nome:
          </Text>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            rules={{ required: "Nome é obrigatório" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.TextInput}
                placeholder="Nome"
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            Email:
          </Text>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.TextInput}
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            CPF:
          </Text>
          <Controller
            control={control}
            name="cpf"
            defaultValue=""
            rules={{
              required: "CPF é obrigatório",
              pattern: {
                value: /^\d{11}$/,
                message: "CPF inválido",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.TextInput}
                placeholder="CPF"
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />
          {errors.cpf && <Text style={styles.errorText}>{errors.cpf.message}</Text>}
        </View>
        <View style={styles.info} >
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.button_text}>
              Salvar
            </Text>
          </TouchableOpacity >
        </View>
      </View>
    </View>
  );
}
