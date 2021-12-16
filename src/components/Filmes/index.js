import Filme from "../Filme/Filme";

export default function Filmes({ filmes }) {
    return (
        <div className="filmes">           
                {filmes.map(filme => <Filme {...filme} isFromUser={false} />)}                             
        </div>
    );
}