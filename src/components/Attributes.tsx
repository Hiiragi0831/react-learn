const Attribute = (props: any) => {
    let name = props.name;
    let value = props.value;

    const count = (value: number) => {
      return value + 1;
    }

    return (
        <div className="attribute">
            <div className="attribute__name">{props.name}</div>
            <div className="attribute__value">{props.value}</div>
            <button className="attribute__btn" onClick={count(props.value)}>+</button>
        </div>
    )
}

const Attributes = () => {

}



export {
    Attributes,
    Attribute,
}
