import React, { useState, useEffect } from 'react';
import "./styles.css";
import Header from '../../components/Header';
import ApiRender from '../../components/ApiRender';
import EventsMap from '../../components/EventsMap';
import { eventsList } from '../../constants/eventsList';
import userServices from '../../services/userServices';
import postServices from '../../services/postServices';

export interface postsData {
  title: string,
  description: string,
  data: string,
  place: string,
  price: string,
  photo: string,
  id: number
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<postsData[]>([]); 

  useEffect(() => {
    postServices.getPosts()
      .then(response => {
        console.log(response?.data.posts);
        setPosts(response?.data.posts || []);
      })
      .catch(error => {
        console.error("Erro ao buscar os posts:", error);
      });
  }, []);

  return (
    <>
      <Header/>
      <ApiRender/>
      <body>
        <div className='container'>
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
      </body>
    </>
  );
}

export default HomePage;
