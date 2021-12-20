import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sessoes from "./components/Sessoes";
import Assentos from "./components/Assentos";
import Sucesso from "./components/Sucesso";

import axios from 'axios';

export default function App() {
    const[filmes,setFilmes]=useState([]);

    useEffect(()=>{
        const promessa = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promessa.then(resposta=>{
            setFilmes(resposta.data);
        });
    },[]);
    if(!filmes){
        return "carregando...";
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage filmes={filmes} />}></Route>
                <Route path="/sessoes/:idFilme" element={<Sessoes />}></Route>
                <Route path="/assentos/:idSessao" element={<Assentos />}></Route>
                <Route path="/sucesso" element={<Sucesso />}></Route>
            </Routes>
        </BrowserRouter>
    );
}