import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Assento from "../Assento";
import { Link } from "react-router-dom";
export  {comprador}
export {filmeEscolhido}

let comprador ={};
let filmeEscolhido ={};

export default function Assentos() {
    const { idSessao } = useParams();
    const [assento, setAssento] = useState(null);
    const [image, setImage] = useState();
    const [titulo, setTitulo] = useState();
    const [dia, setDia] = useState();
    const [hora, setHora] = useState();
    const [nome,setNome] = useState();
    const [cpf, setCpf] = useState();
    const [data,setData]=useState();

    comprador = {nome: nome, CPF:cpf}
    filmeEscolhido ={tema:titulo, dia:data, hora:hora}    


    function renderizarResposta(resposta) {
        setAssento(resposta.data.seats);
        setImage(resposta.data.movie.posterURL);
        setTitulo(resposta.data.movie.title);
        setDia(resposta.data.day.weekday);
        setHora(resposta.data.name);
        setData(resposta.data.day.date);
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
                    <input type = "text" placeholder="Digite seu nome..." value= {nome} onChange={(e)=> setNome(e.target.value) }/>
                </div>
                <div className="cadastro">
                    <p>CPF do comprador: </p>
                    <input type = "number" placeholder="Digite seu CPF..." value = {cpf} onChange={(e)=> setCpf(e.target.value) } />
                </div>
            </div>
            <div className="reserva-assento">
                <Link to="/sucesso">
                    <button className="reserva">Reservar assento(s)</button>
                </Link>
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