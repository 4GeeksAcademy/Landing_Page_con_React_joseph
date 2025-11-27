import React from "react";
export const Jumbotron = () => {
   return (
<div className="card mx-auto" style={{backgroundColor:"#6c6e6b", padding:"20px 15px", maxw:"250px", display:"flex", alignItems: "start"}}>
  <div className="card-body">
    
          <h1 className="card-title text-start" style = {{fontSize: "4.5rem", fontWeight: "bold", color: "white" }}>
            Rincon del vago
          </h1>
       
          <p className="card-text text-start" style={{fontSize: "2rem", color:"white"}} >
            Gaming, coding y taekwondo: tres mundos distintos unidos en la Página   
          </p>
     <div className="d-flex justify-content-start">
         <button className="btn btn-primary" style={{ backgroundColor: "yellow", color: "black", fontWeight: "bold", padding:"10px 20px", borde:"2px solid black" }}>Go somewhere </button>
     </div>
</div>
</div>
    );
};