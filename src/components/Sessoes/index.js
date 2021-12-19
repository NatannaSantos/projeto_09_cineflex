import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sessao from "../Sessao";


export default function Sessoes() {
    const { idFilme } = useParams();
    const [filme, setFilme] = useState(null);
    const [image,setImage] = useState(null);
    const [name, setName] = useState();

   
   

    function renderizarResposta(resposta) {
        setFilme(resposta.data.days);
        setImage(resposta.data.posterURL);
        setName(resposta.data.title);
    }

    useEffect(() => {
        const promessa = axios.get(`
      https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes
    `);
        promessa.then(renderizarResposta);
    }, []);


    if (!filme) {
        return "carregando..."
    }

    return (
        <>
            <div className="main-page">
                <div className="titulo-pagina">
                    <h1>Selecione o horário</h1>
                </div>
                <div className="sessoes">
                    {filme.map(cartaz => <Sessao {...cartaz} />)}

                </div>
            </div>
            <footer>
                <div className="cartaz-filme">
                <img src={image}/>
                </div>
                <p>{name}</p>
             
            </footer>
        </>
    );
}

