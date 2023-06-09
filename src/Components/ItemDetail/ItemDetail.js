import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";

function ItemDetail ({item}){
    return(
        <div className="ItemDetail">
            <div className="row">
                <h1 className="title">{item.Title}</h1>
            </div>
            <div className="row-row2">
                <div className="column">
                    <img src={item.Img} className="imagen img-fluid" alt={item.Title}/>
                </div>
                <div className="column">
                    <p className="p">{item.Description}</p>
                    <p className="p">{item.Price}</p>
                    <p className="p">Cantidad: {item.Stock}</p>
                    <div className="botonContador"> 
                        <ItemCount className="boton" items={item}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;