import { Card } from "./Card.jsx";
import { Cardsdata } from "./Cardsdata.jsx";

export const Cardlist = () => {
    return(
           <div className="d-flex justify-content-center gap-3 flex-wrap w-100">
           {Cardsdata.map (( item, index) => (
			<Card 
            key={index}
			title={item.title}
            text={item.text}
            img={item.img}
            button={item.button}
            link={item.link}
			/>
			))}
            </div>
    );
};

