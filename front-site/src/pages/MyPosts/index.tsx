import React, { useEffect, useState } from 'react';
import "./styles.css";
import Header from '../../components/Header';
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import EventsMap from '../../components/EventsMap';
import { postsData } from '../HomePage';
import postServices from '../../services/postServices';

const MyPosts: React.FC = () => {
    const [posts, setPosts] = useState<postsData[]>([]); 
    const navigate = useNavigate();
    const handleCreatePost = () => {
        navigate("/createpost");
    };

    useEffect(() => {
        postServices.getPosts()
          .then(response => {
            console.log(response?.data.posts);
            
            setPosts([...response?.data.posts].reverse());
          })
          .catch(error => {
            console.error("Erro ao buscar os posts:", error);
          });
      }, []);

    return (
        <>
            <Header/>
            <body>
                <div className='container'>
                    <button className='new-post' onClick={handleCreatePost}>
                        <div>  
                            <AiOutlinePlus style={{height: 100, width: 100}}></AiOutlinePlus>
                            <p className="title">Faça uma publicação!</p> 
                        </div>      
                    </button>
                    <p className='text'>
                        Publicações
                    </p>
                    <div className='space'>
                        {posts.map((event) => (
                            <EventsMap
                                key={event.id}
                                title={event.title}
                                photo={event.photo}
                                description={event.description}
                                place={event.place}
                                data={event.data}
                                price={event.price}
                                id={event.id} 
                            />
                        ))}
                    </div>
                </div>
            </body>
        </>
    );
}

export default MyPosts;
