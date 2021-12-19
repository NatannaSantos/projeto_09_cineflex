import Filme from "../Filme";

export default function Filmes({ filmes }) {
    return (
        <div className="filmes">           
                {filmes.map(filme => <Filme {...filme} />)}                             
        </div>
    );
}