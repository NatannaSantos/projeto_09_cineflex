import { Link } from "react-router-dom";
import { comprador } from "../Assentos";
import { filmeEscolhido } from "../Assentos";

export default function Sucesso() {
    return (
        <>
            <div className="main-page">
                <div className="titulo-sucesso">
                    <h1>pedido feito <br></br> com sucesso!</h1>
                </div>
                <div className="pedidoSessao">
                    <h1>Filme e Sessão</h1>
                    <p>{filmeEscolhido.tema}</p>
                    <p> {filmeEscolhido.dia}-{filmeEscolhido.hora}</p>
                </div>
                <div className="pedidoSessao">
                    <h1>Ingressos</h1>
                    <p>poltrona</p>
                </div>
                <div className="pedidoSessao">
                    <h1>Comprador</h1>
                    <p>Nome: {comprador.nome} </p>
                    <p>CPF: {comprador.CPF}</p>
                </div>
            </div>
            <div className="retorno">
                <Link to="/">
                    <button className="retornar"> Voltar pra Home </button>
                </Link>

            </div>
        </>
    );
}