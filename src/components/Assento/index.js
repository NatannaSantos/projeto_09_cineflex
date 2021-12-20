export default function Assento({ name, isAvailable }) {

    return (

        <div className={`assento ${isAvailable === false ? "indisponivel"  : " "}`} >
            <p>{name}</p>
        </div>
    );
}