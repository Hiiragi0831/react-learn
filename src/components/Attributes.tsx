const Attribute = (props: any) => {
    // const [count, setCount] = useState(0);
    //
    // function handleClick() {
    //     setCount(count + 1);
    // }
    // console.log(props)
    return (
        <div className="attribute">
            <div className="attribute__box">
                <div className="attribute__name">{props.name}</div>
                <div className="attribute__value">{props.value}</div>
                <button className="attribute__btn" onClick={props.onClick}>+</button>
            </div>
            {(props.children)}
        </div>
    )
}

const Attributes = (props: any) => {
    // const ATTRIBUTES = props.attributes;

    console.log(props)

    return (
        <div className="attributes">

        </div>
    )
}



export {
    Attributes,
    Attribute,
}
