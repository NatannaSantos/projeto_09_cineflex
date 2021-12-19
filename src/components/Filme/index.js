import { Link } from "react-router-dom";

export default function Filme({ id, title, posterURL }) {
    return (
        <div className="filmes-container">
            <Link to={`/sessoes/${id}`}>
                <div className="filme">
                    <img src={posterURL} alt={title} />
                </div>
            </Link>
        </div>
    );
}