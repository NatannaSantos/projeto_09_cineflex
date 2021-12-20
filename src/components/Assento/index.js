export default function Assento({ name, isAvailable }) {

    return (

        <div className={`assento ${isAvailable === true ? "indisponivel" : " "}`} >
            <p>{name}</p>
        </div>
    );
}