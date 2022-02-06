import { useEffect, useState } from "react";
import { getAllWines } from "../../../services/productServices";

export function WineList(){
    const [wines, setWines] = useState([]);
        useEffect(() => {
            setWines(getAllWines());     
        });
    return (
        <ul>
            <li>{wines[0].name}</li>
        </ul>
    );
}