import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import img from "../../assets/images/beach-palm.png";
import { useForm } from "react-hook-form";
import validator from "validator";
import { AuthContext } from '../../contexts/auth';
import { useContext } from "react";
import userServices from '../../services/userServices';

interface FormValues {
    name: string;
    email: string;
    cpf: string;
    password: string;
  }


const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const Auth = useContext(AuthContext)
    const { control, handleSubmit, formState: { errors }, register } = useForm<FormValues>(); 

  const onSubmit = (data: FormValues) => {
    userServices.createUser(data).then(response => {
      console.log(Auth.token)
      navigate("/" as never);
    })
  };

    const handleGoToLogin = () => {
        navigate('/');
    };

    return (
        <body>
            <div className='signin-container'>   
                <div className='signin-logo'>
                    <div className='signin-title-direction'>
                        <p className='signin-title-main'>Carioca</p>
                        <p className='signin-title-sub'>Experience</p>
                        <img src={img} alt="" className='signin-logo-img'/>
                    </div>
                </div>
                <div className='signin-content'>
                    <div className="signin-form-box">
                        <p className='signin-title-login'>Cadastre-se</p>
                        <div className='signin-description'>
                            <div className='signin-label'>
                                <p className='signin-text-decoration'>Nome:</p>
                            </div>
                            <div className='signin-value'>
                                <input
                                    className={errors?.name && "input-error"} 
                                    type="text"
                                    placeholder='Nome'
                                    {...register("name", { required: true })}
                                />
                                {errors?.name?.type === "required" && <p className='error-message'>Digite o seu nome.</p>}
                            </div>
                        </div>
                        <div className='signin-description'>
                            <div className='signin-label'>
                                <p className='signin-text-decoration'>Email:</p>
                            </div>
                            <div className='signin-value'>
                                <input
                                    className={errors?.email && "input-error"} 
                                    type="email"
                                    placeholder='Email'
                                    {...register("email", { required: true, validate: (value) => validator.isEmail(value)  })}
                                />
                                 {errors?.email?.type === "required" && <p className='error-message'>Digite o seu email.</p>}
                                 {errors?.email?.type === "validate" && <p className='error-message'>Email inválido.</p>}
                            </div>
                        </div>
                        <div className='signin-description'>
                            <div className='signin-label'>
                                <p className='signin-text-decoration'>CPF:</p>
                            </div>
                            <div className='signin-value'>
                                <input
                                     className={errors?.cpf && "input-error"} 
                                    type="text"
                                    placeholder='CPF'
                                    {...register("cpf", {required: true,pattern: /^[0-9]{11}$/, maxLength: 11, minLength: 11})}
                                />
                                {errors?.cpf?.type === "required" && <p className='error-message'>Digite o seu CPF.</p>}
                                {(errors?.cpf?.type === "minLength")   && <p className='error-message'>CPF inválido.</p>}
                                {(errors?.cpf?.type === "maxLength")   && <p className='error-message'>CPF inválido.</p>}
                                {errors?.cpf?.type === "pattern" && <p className='error-message'>CPF inválido.</p>}
                            </div>
                        </div>
                        <div className='signin-description'>
                            <div className='signin-label'>
                                <p className='signin-text-decoration'>Senha:</p>
                            </div>
                            <div className='signin-value'>
                                <input
                                    className={errors?.password && "input-error"} 
                                    type="password"
                                    placeholder='Senha'
                                    {...register("password", { required: true, minLength: 7  })}
                                />
                                 {errors?.password?.type === "required" && <p className='error-message'>Digite sua senha.</p>}
                                 {errors?.password?.type === "minLength" && <p className='error-message'>Senha deve ter no mínimo 7 caracteres.</p>}
                            </div>
                        </div>
                        <button className='signin-edit-profile' onClick={handleSubmit(onSubmit)}>
                            Salvar
                        </button>
                        <button className='signin-go-to-login' onClick={handleGoToLogin}>
                            Já tenho uma conta
                        </button>
                    </div>
                </div>
            </div>    
        </body>
    );
}  

export default SignIn;
