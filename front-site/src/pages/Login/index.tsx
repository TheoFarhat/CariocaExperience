import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import img from "../../assets/images/beach-palm.png";
import { useForm } from "react-hook-form";
import validator from "validator";
import { AuthContext } from '../../contexts/auth';
import { useContext } from "react";
import userServices from '../../services/userServices';
import axios from "../../services/api";


interface loginData {
    email: string;
    password: string;
}


const Login: React.FC = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors }, register } = useForm<loginData>();
    const Auth = useContext(AuthContext);
    
    const onSubmit = async (data: loginData) => {
        try {
            const response = await userServices.login(data);
            if (response && response.data) {
                Auth.setToken(response.data.token);
                localStorage.setItem("token", response.data.token);

                if (response.status === 202) {
                    navigate('/home');
                }
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };



    const handleGoToSignIn = () => {
        navigate('/signin');
    };

    return (
        <body>
            <div className='container-login'>   
                <div className='logo-login'>
                    <div className='title-direction-login'>
                        <p className='title-login'>Carioca</p>
                        <p className='title-login'>Experience</p>
                        <img src={img} alt="" style={{ width: 50, height: 50 }}/>
                    </div>
                </div>
                <div className='content-login'>
                    <div className="form-box-login">
                        <p className='title-login-box'>Login</p>
                        <div className='description-login'>
                        </div>
                        <div className='description-login'>
                            <div className='label-login'>
                                <p className='text-decoration-login'>Email:</p>
                            </div>
                            <div className='value-login'>
                                <input
                                    className={errors?.email && "input-error"} 
                                    type="email"
                                    placeholder='Email'
                                    {...register("email", { required: true, validate: (value) => validator.isEmail(value)  })}
                                />
                                 {errors?.email?.type === "required" && <p className='error-message-login'>Digite seu email.</p>}
                                 {errors?.email?.type === "validate" && <p className='error-message-login'>Email inválido.</p>}
                            </div>
                        </div>
                        <div className='description-login'>
                            <div className='label-login'>
                                <p className='text-decoration-login'>Senha:</p>
                            </div>
                            <div className='value-login'>
                                <input
                                    className={errors?.password && "input-error"} 
                                    type="password"
                                    placeholder='Senha'
                                    {...register("password", { required: true, minLength: 7  })}
                                />
                                 {errors?.password?.type === "required" && <p className='error-message-login'>Digite sua senha.</p>}
                                 {errors?.password?.type === "minLength" && <p className='error-message-login'>Senha deve ter no mínimo 7 caracteres.</p>}
                            </div>
                        </div>
            
                        <button className='edit-profile-button' onClick={handleSubmit(onSubmit)}>
                            Salvar
                        </button>
                        <button className='go-to-signin-button' onClick={handleGoToSignIn}>
                            Cadastre-se
                        </button>
                    </div>
                </div>
            </div>    
        </body>
    );
}  

export default Login;
