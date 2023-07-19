import React from "react";
const Button =({title="ButtonTitle",onClickHandler})=>{
    return <button onClick={onClickHandler}>{title}</button>;
}
export default Button;