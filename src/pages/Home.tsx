import { FormEvent, useState } from 'react'
import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";


export const Home = () => {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');
  const { user, signInWhiteGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWhiteGoogle();
    }

    history.push("/rooms/new");
  }

  async function handlelainRoom(event: FormEvent){
    event.preventDefault();

    if(roomCode.trim() === ''){
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      alert('Room does not exists.');
      setRoomCode('')
      return;
    }

    history.push(`/rooms/${roomCode}`);

  }
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Illustração simbolizando pergutas e respostas"
        />
        <strong>Crie salas Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="logo do google" />
            <p>Crie sua sala com o google</p>
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handlelainRoom}>
            <input 
            type="text"
            placeholder="Digite sua sala"
            onChange={event => setRoomCode(event.target.value)} 
            value={roomCode}
           />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
