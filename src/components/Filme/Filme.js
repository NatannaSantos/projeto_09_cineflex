export default function Filme({ title, posterURL }) {
    return (
        <div className="filmes-container">
         <div className="filme">
            <img src={posterURL} alt={title} />
            </div> 
        </div>
        
       
    );
}