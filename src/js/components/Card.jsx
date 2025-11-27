export const Card = ({img, title, text, button, link}) => {
    return (
   
<div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt={title} />
  <div className="card-body text-start">
    <h1 className="card-title"> {title}</h1>
    <p className="card-text">{text}</p>
    <a href={link} className="btn btn-primary">{button}</a>
</div>
</div>
    );
};