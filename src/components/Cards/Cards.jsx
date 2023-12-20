
import Data from "../../logements.json";

function Cards() {
    return (
        <div className="gallery" >
            {Data.map(({ title, cover }) => (
                <div className="card">
                    <img className="card_img" src={cover} alt="Aperçu du logement" />
                    <div className="card_title">
                        <h2 className="card_title_text">{title}</h2>
                    </div>


                </div>
            ))}
        </div>
    );
}


export default Cards;