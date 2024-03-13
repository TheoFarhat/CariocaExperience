import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import Header from '../../components/Header';
import { useForm, SubmitHandler } from "react-hook-form";
import postServices from '../../services/postServices';


export interface PostData {
    title: string;
    description: string;
    place: string;
    photo: string;
    data: string;
    is_paid: boolean;
    price: string;
}

const CreatePost: React.FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm<PostData>(); 
    const [image, setImage] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onSubmit: SubmitHandler<PostData> = async (data) => {
        try {
            const formData = new FormData();
    
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('place', data.place);
            formData.append('data', data.data);
            formData.append('is_paid', data.is_paid.toString()); 
            formData.append('price', data.price);
    
            if (image) {
                formData.append('photo', image); 
            }
    
            const createdPost = await postServices.createPost(formData);
            console.log('Publicação criada:', createdPost);
            navigate('/myposts');
        } catch (error) {
            console.error('Erro ao criar publicação:', error);
        }
    };
    
    const handleImageClick = () => {
        if (inputRef.current !== null) {
            inputRef.current.click();
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setImage(file);
    };
    
    return (
        <>
            <Header />
            <body>
                <div className='create-post-container'>
                    <div className='create-post-space'>
                        <h1 className='create-post-title'>Criar Publicação!</h1>
                        <div className='create-post-name-image'>
                            <div className='create-post-name-input'>
                                <p className='create-post-name-style'>Nome: </p>
                                <input
                                    className={errors?.title && "create-post-input-error"}
                                    type="text"
                                    placeholder='Nome do evento'
                                    {...register("title", { required: true })}
                                />
                                {errors?.title?.type === "required" && <p className='create-post-error-message'>Digite o nome do evento.</p>}
                            </div>
                            <div>
                                <p className='create-post-name-style'>Imagem: </p>
                                <div onClick={handleImageClick}>
                                    <div className="create-post-image-box">
                                        {image && <img src={URL.createObjectURL(image)} alt="Imagem" />}
                                        <input type="file" style={{ display: "none" }} ref={inputRef} onChange={handleImageChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='create-post-description-data-row'>
                            <div className='create-post-description'>
                                <p className='create-post-name-style'>Descrição: </p>
                                <input
                                    className={errors?.description && "create-post-input-error"}
                                    type="text"
                                    placeholder='Descreva o evento'
                                    {...register("description", { required: true })}
                                />
                                {errors?.description?.type === "required" && <p className='create-post-error-message'>Faça uma descrição do evento.</p>}
                            </div>
                            <div className='create-post-data'>
                                <p className='create-post-name-style'>Data: </p>
                                <input
                                    className={errors?.data && "create-post-input-error"}
                                    type="text"
                                    placeholder='15 de agosto às 16:00h'
                                    {...register("data", { required: true })}
                                />
                                {errors?.data?.type === "required" && <p className='create-post-error-message'>Digite a data e horário do evento.</p>}
                            </div>
                        </div>
                        <div className='create-post-checkbox-place-row'>
                            <div className='create-post-checkbox-price-column'>
                                <div className="create-post-checkbox-group">
                                    <input
                                        type="checkbox"
                                        className="create-post-is_paid"
                                        {...register("is_paid")}
                                    />
                                    <label>É pago?</label>
                                </div>
                                <div className='create-post-price'>
                                    <p className='create-post-name-style'>Preço: </p>
                                    {watch("is_paid") && errors.price && errors.price.type === "required" && (
                                        <p className='create-post-error-message'>Digite o preço do evento.</p>
                                    )}
                                    <input
                                        className={(watch("is_paid") && errors.price && "create-post-input-error") || ""}
                                        type="text"
                                        placeholder='30.00'
                                        {...register("price", {
                                            required: watch("is_paid") === true ? "Digite o preço do evento." : false,
                                            validate: (value) => {
                                                if (watch("is_paid")) {
                                                    return value !== "" || "Digite o preço do evento.";
                                                } else {
                                                    return true;
                                                }
                                            },
                                            setValueAs: (value) => {
                                                if (!watch("is_paid")) {
                                                    return "Gratuito";
                                                }
                                                return value;
                                            }
                                        })}
                                    />
                                </div>
                            </div>
                            <div className='create-post-place'>
                                <p className='create-post-name-style'>Local: </p>
                                <input
                                    className={errors?.data && "create-post-input-error"}
                                    type="text"
                                    placeholder='Localização'
                                    {...register("place", { required: true })}
                                />
                                {errors?.data?.type === "required" && <p className='create-post-error-message'>Digite o local do evento.</p>}
                            </div>
                        </div>
                        <button className='create-post-save-button' onClick={handleSubmit(onSubmit)}>
                                Criar publicação
                            </button>
                    </div>
                </div>
            </body>
        </>
    );
}

export default CreatePost;
