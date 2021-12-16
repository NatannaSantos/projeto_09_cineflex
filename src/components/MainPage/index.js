import Filmes from "../Filmes";
export default function MainPage({filmes}){
    
   return(
    <div className="main-page">
    <div className="titulo-pagina">
        <h1>Selecione o filme</h1>
    </div>
    <Filmes filmes={filmes} />
</div>
   ); 
}