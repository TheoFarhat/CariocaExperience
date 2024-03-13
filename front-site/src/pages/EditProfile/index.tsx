import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import Header from '../../components/Header';
import { CgProfile } from "react-icons/cg";
import { useForm } from "react-hook-form";
import validator from "validator";
import { AuthContext } from '../../contexts/auth';
import { useContext} from "react";
import userServices from '../../services/userServices';

export interface FormValues {
    name: string;
    email: string;
    cpf: string;
  }

const EditProfile: React.FC = () => {
    const Auth = useContext(AuthContext);
    const navigation = useNavigate();
    const { control, handleSubmit, formState: { errors }, register } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await userServices.updateUser({ token: Auth.token }, data);
            if (response && response.status === 202) {
                console.log('Perfil atualizado com sucesso!');
                navigation("/profile");
            }
        } catch (error) {
            console.error('Erro ao atualizar perfil', error);
        }
    };

    return (
        <>
            <Header />
            <body>
                <div className='container-edit-profile'>
                    <div className='content-edit-profile'>
                        <div className='title-icon-edit-profile'>
                            <CgProfile style={{ height: 70, width: 70, color: "#FFB74A" }} />
                            <p className='title-edit-profile'>Editar Perfil</p>
                        </div>
                        <div className='description-edit-profile'>
                            <div className='label-edit-profile'>
                                <p className='text-decoration-edit-profile'>Nome:</p>
                            </div>
                            <div className='value-edit-profile'>
                                <input
                                    className={errors?.name && "input-error"} 
                                    type="text"
                                    placeholder='Novo nome'
                                    {...register("name", { required: true })}
                                />
                                {errors?.name?.type === "required" && <p className='error-message-edit-profile'>Digite o novo nome.</p>}
                            </div>
                        </div>
                        <div className='description-edit-profile'>
                            <div className='label-edit-profile'>
                                <p className='text-decoration-edit-profile'>Email:</p>
                            </div>
                            <div className='value-edit-profile'>
                                <input
                                    className={errors?.email && "input-error"} 
                                    type="email"
                                    placeholder='Novo email'
                                    {...register("email", { required: true, validate: (value) => validator.isEmail(value)  })}
                                />
                                 {errors?.email?.type === "required" && <p className='error-message-edit-profile'>Digite o novo email.</p>}
                                 {errors?.email?.type === "validate" && <p className='error-message-edit-profile'>Email inválido.</p>}
                            </div>
                        </div>
                        <div className='description-edit-profile'>
                            <div className='label-edit-profile'>
                                <p className='text-decoration-edit-profile'>CPF:</p>
                            </div>
                            <div className='value-edit-profile'>
                                <input
                                     className={errors?.cpf && "input-error"} 
                                    type="text"
                                    placeholder='CPF'
                                    {...register("cpf", {required: true,pattern: /^[0-9]{11}$/, maxLength: 11, minLength: 11})}
                                />
                                {errors?.cpf?.type === "required" && <p className='error-message-edit-profile'>Digite o seu CPF.</p>}
                                {(errors?.cpf?.type === "minLength")   && <p className='error-message-edit-profile'>CPF inválido.</p>}
                                {(errors?.cpf?.type === "maxLength")   && <p className='error-message-edit-profile'>CPF inválido.</p>}
                                {errors?.cpf?.type === "pattern" && <p className='error-message-edit-profile'>CPF inválido.</p>}
                            </div>
                        </div>
                        <button className='edit-profile-button' onClick={handleSubmit(onSubmit)}>
                            Salvar
                        </button>
                    </div>
                </div>
            </body>
        </>
    );
}

export default EditProfile;
