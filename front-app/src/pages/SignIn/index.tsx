import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller, FieldError, FieldValues } from "react-hook-form"; 
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import UserServices from "../../services/UserServices";

interface FormValues extends FieldValues {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export default function SignIn() {
  const Auth = React.useContext(AuthContext)
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>(); 

  const onSubmit = (data: FormValues) => {
    UserServices.createUser(data).then(response => {
      console.log(Auth.token)
      navigation.navigate("Login" as never);
    })
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
        <View style={styles.form_error}>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            rules={{ required: "Digite o nome" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Nome"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                />
                <ErrorMessage error={errors.name} />
              </>
            )}
          />
        </View>
        <View style={styles.form_error}>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: "Digite o email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                />
                <ErrorMessage error={errors.email} />
              </>
            )}
          />
        </View>
        <View style={styles.form_error}>
          <Controller
            control={control}
            name="cpf"
            defaultValue=""
            rules={{
              required: "Digite o CPF",
              pattern: {
                value: /^\d{11}$/,
                message: "CPF inválido",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.TextInput}
                  placeholder="CPF"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                />
                <ErrorMessage error={errors.cpf} />
              </>
            )}
          />
        </View>
        <View style={styles.form_error}>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{ required: "Digite a senha", minLength: { value: 7, message: "Senha deve ter no mínimo 7 caracteres" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Senha"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                />
                <ErrorMessage error={errors.password} />
              </>
            )}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.button_text}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
        <Text style={styles.sign_up}>Já tem uma conta?</Text>
      </TouchableOpacity>
    </View>
  );
}

interface ErrorMessageProps {
  error?: FieldError; 
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <Text style={styles.errorText}>{error && error.message}</Text>;
};
