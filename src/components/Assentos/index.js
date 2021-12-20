import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Assento from "../Assento";

export default function Assentos() {
    const { idSessao } = useParams();
    const [assento, setAssento] = useState(null);

    function renderizarResposta(resposta) {
        setAssento(resposta.data.seats);
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
            </div>
        </>
    );
}