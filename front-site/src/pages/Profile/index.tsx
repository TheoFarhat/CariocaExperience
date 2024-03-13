import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import Header from '../../components/Header';
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../contexts/auth';
import userServices from '../../services/userServices';

const Profile: React.FC = () => {
    const Auth = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState<any>(null); 
    const navigation = useNavigate(); 

    const handleEditProfile = () => {
        navigation('/editprofile'); 
    };

    const getUserDetails = () => {
        if (Auth.token) {
            userServices.getDetail({ token: Auth.token }).then(response => {
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
        reloadProfile(); 
    }, [navigation]);


  return (
    <>
        <Header/>
        <body>
            <div className='container'>
               <div className='content'>
                <div className='title-icon'>
                    <CgProfile style={{height: 70, width: 70, color: "#FFB74A"}} ></CgProfile>
                    <p className='title'>Meu Perfil</p>
                </div>
                <div className='description'>
                    <div className='label'>
                        <p className='text-decoration'>Nome:</p>
                    </div>
                    <div className='value'>
                        <p className='text-decoration'>{userDetails?.user.name}</p>
                    </div>
                </div>
                <div className='description'>
                    <div className='label'>
                        <p className='text-decoration'>Email:</p>
                    </div>
                    <div className='value'>
                        <p className='text-decoration'>{userDetails?.user.email}</p>
                    </div>
                </div>
                <div className='description'>
                    <div className='label'>
                        <p className='text-decoration'>CPF:</p>
                    </div>
                    <div className='value'>
                        <p className='text-decoration'>{userDetails?.user.cpf}</p>
                    </div>
                </div>
                    <button className='edit-profile' onClick={handleEditProfile}>
                        Editar Perfil
                    </button>
               </div>
            </div>
        </body>
    </>
  );
}

export default Profile;