import { Link } from "react-router-dom";

export default function Sessao({ weekday, date, showtimes }) {

    return (

        <>
            <div className="data">
                <p>{weekday} - {date} </p>
            </div>
            <div className="horario">
                <Link to={`/assentos/${showtimes[0].id}`}>
                    <button>{showtimes[0].name}</button>
                </Link>
                <Link to={`/assentos/${showtimes[1].id}`}>
                    <button>{showtimes[1].name}</button>
                </Link>
            </div>


        </>
    );
}