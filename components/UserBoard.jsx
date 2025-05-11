import React from 'react';

const UserBoard = () =>{
    
    const [drinkCode,setDrinkCode] = useState("")
    const buy=()=>{
        const Dcode=Number(drinkCode);
        alert("קוד מוצר"+Dcode)
    }
    return(
    <div className="userBoard">
        <button className="Buser"onClick={()=>{setDrinkCode(drinkCode+"1")}}>1</button>
        <button className="Buser" onClick={()=>{setDrinkCode(drinkCode+"2")}}>2</button>
        <button className="Buser" onClick={()=>{setDrinkCode(drinkCode+"3")}}>3</button>
        <button className="Buser" onClick={()=>{setDrinkCode(drinkCode+"0")}}>0</button>
    </div>
    );

};
export default UserBoard;