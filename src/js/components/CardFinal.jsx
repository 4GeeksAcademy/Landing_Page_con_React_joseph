import React from "react";
import Card from "../components/Card.jsx";

const CardFinal = () => {
    let cardInformation = [
        {urlImageCard: "https://www.ecoportal.net/wp-content/uploads/2019/04/simientes.jpg",
            packagesNames: "Paquete: Semilla",
            packagesDescription: "Transforma tu idea en el esqueleto profesional de un curso[...]"
        },
        {urlImageCard: "https://cdn77.pressenza.com/wp-content/uploads/2025/01/crecimiento-freepik-1-820x442.jpg",
            packagesNames: "Paquete: Crecimiento",
            packagesDescription: "Dale vida a tu estructura con actividades para tus estudiantes[...]"
        },
        {urlImageCard: "https://mexico.unir.net/wp-content/uploads/sites/6/2024/12/funciones-docente-universidad.jpg",
            packagesNames: "Paquete: Potencial",
            packagesDescription: "Refuerza el aprendizaje de tus alumnos con recursos clave[...]"
        },
        {urlImageCard: "https://www.agustinmedina.com/wp-content/uploads/676767.jpeg",
            packagesNames: "Paquete: Éxito",
            packagesDescription: "El paquete todo incluido para un curso de alto impacto y calidad[...]"
        }
    ]
    return(
        cardInformation.map((item, index, array) =>{
            return (
                <div className="col-3">
            <Card key={index}
                urlImageCardProps = {item.urlImageCard} 
                packagesNamesProps = {item.packagesNames}
            packagesDescriptionProps = {item.packagesDescription}
            />
</div>
            )
        })
    )
}

export default CardFinal;