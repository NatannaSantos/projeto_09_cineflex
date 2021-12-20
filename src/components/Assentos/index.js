import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Assento from "../Assento";

export default function Assentos() {
    const { idSessao } = useParams();
    const [assento, setAssento] = useState(null);
    const [image, setImage] = useState();
    const [titulo, setTitulo] = useState();
    const [dia, setDia] = useState();
    const [hora, setHora] = useState();

    function renderizarResposta(resposta) {
        setAssento(resposta.data.seats);
        setImage(resposta.data.movie.posterURL);
        setTitulo(resposta.data.movie.title);
        setDia(resposta.data.day.weekday);
        setHora(resposta.data.name);
    }

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(renderizarResposta);
    }, []);
    if (!assento) {
        return <h1> Carregando... </h1>
    }


    return (
        <>
            <div className="main-page">
                <div className="titulo-pagina">
                    <h1>Selecione o(s) assento(s)</h1>
                </div>
                <div className="assentos">
                    {assento.map(cadeira => <Assento {...cadeira} />)}
                </div>
                <div className="exemplo-assentos">
                    <div className="exemplo">
                        <div className="selecionado"></div>
                        <p>Selecionado</p>
                    </div>
                    <div className="exemplo">
                        <div className="disponivel"></div>
                        <p>Disponível</p>
                    </div>
                    <div className="exemplo">
                        <div className="indisponivel"></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="cadastro">
                    <p>Nome do comprador: </p>
                    <input placeholder="Digite seu nome..." />
                </div>
                <div className="cadastro">
                    <p>CPF do comprador: </p>
                    <input placeholder="Digite seu CPF..." />
                </div>
            </div>
            <footer className="rodape-assento">
                <div className="cartaz-filme">
                    <img src={image} />
                </div>
                <div className="agendamento">
                    <p>{titulo}</p>
                    <p>{dia}-{hora}</p>
                </div>
            </footer>
        </>
    );
}