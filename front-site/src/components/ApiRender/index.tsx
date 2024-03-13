import React, { useState, useEffect } from 'react';
import './styles.css';
import weatherServices from '../../services/weatherServices';
import { IoCloudyNightOutline, IoSunnyOutline, IoRainyOutline } from 'react-icons/io5'; 

type WeatherInfo = {
    condition_code: string;
    description: string;
}

const ApiRender: React.FC = () => {
    const [weather, setWeather] = useState<WeatherInfo[]>([]);

    useEffect(() => {
        weatherServices.getWeather()
            .then(response => {
                if (response && response.data) {
                    let dados = {
                        condition_code: response.data.condition_code,
                        description: response.data.description
                    };
                    setWeather([dados]);
                } else {
                    setWeather([]);
                }
            })
            .catch(error => {
                console.log('API Error:', error);
            });
    }, []);

    const getWeatherMessage = (conditionCode: string) => {
        const rainyCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '17', '35', '37', '38', '39', '45', '47'];
        const sunnyCodes = ['32', '33', '34'];
        const cloudyCodes = ['26', '27', '28', '29', '30'];
    
        if (rainyCodes.includes(conditionCode)) {
            return 'Tempo chuvoso';
        } else if (sunnyCodes.includes(conditionCode)) {
            return 'Tempo ensolarado';
        } else if (cloudyCodes.includes(conditionCode)) {
            return 'Tempo nublado';
        } else {
            return 'Condição desconhecida';
        }
    };

    return (
        <div className='container'>
            <div className='weather'>
                {weather.map((info, index) => (
                    <div key={index}>
                        {info.condition_code === '45' && (
                            <div className='box'>
                                <p className='title'>
                                    Tempo chuvoso!
                                </p>
                                <IoRainyOutline style={{height: 70, width: 70, marginBottom: 10}}></IoRainyOutline>
                                <p className='text-description'>
                                    Melhor procurar eventos cobertos! 
                                </p>   
            
                            </div>
                        )}
                        {info.condition_code === '32' || info.condition_code === '33' || info.condition_code === '34' && (
                            <div className='box'>
                            <p className='title'>
                                Tempo ensrolado!
                            </p>
                            <IoSunnyOutline style={{height: 70, width: 70, marginBottom: 10}} ></IoSunnyOutline>
                            <p className='text-description'>
                                Programas ao ar livre são a melhor escolha! 
                            </p>   
        
                        </div>
                        )}
                        {['26', '27', '28', '29', '30'].includes(info.condition_code) && (
                            <div className='box'>
                            <p className='title'>
                                Tempo nublado!
                            </p>
                            <IoCloudyNightOutline style={{height: 70, width: 70, marginBottom: 10}} ></IoCloudyNightOutline>
                            <p className='text-description'>
                                hoje o dia está ótimo para vários tipos de eventos! 
                            </p>   
        
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ApiRender;
