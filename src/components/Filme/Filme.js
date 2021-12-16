import { Link } from "react-router-dom";

export default function Filme({ title, posterURL }) {
    return (
        <div className="filmes-container">
            <Link to="sessoes">
                <div className="filme">
                    <img src={posterURL} alt={title} />
                </div>
            </Link>
        </div>
    );
}