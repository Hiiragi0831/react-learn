import {useState} from "react";

const Attribute = (props: any) => {
    return (
        <div className="attribute">
            <div className="attribute__name">{props.name}</div>
            <div className="attribute__value">{props.value}</div>
            <button className="attribute__btn" onClick={props.onClick}>+</button>
        </div>
    )
}

const Attributes = () => {

}



export {
    Attributes,
    Attribute,
}
