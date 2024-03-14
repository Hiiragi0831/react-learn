const Attribute = (props: any) => {
    // const [count, setCount] = useState(0);
    //
    // function handleClick() {
    //     setCount(count + 1);
    // }
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
    return (
        <div className="attributes">
            {
                props.attributes ? props.attributes.map((attribute: any) => {
                        if (attribute.skills) {

                            return <Attribute
                                name={attribute.name}
                                value={attribute.value}
                                isActive={props.isActive}
                                onClick={() => props.onClick(attribute.name)}
                            >
                                <Attributes
                                    attributes={attribute.skills}
                                    isActive={props.isActive}
                                    onClick={props.onClick}
                                />
                            </Attribute>
                        }

                        return <Attribute
                            name={attribute.name}
                            value={attribute.value}
                            isActive={props.isActive}
                            onClick={() => props.onClick(attribute.name)}
                        />
                    })
                    : (props.children)
            }
        </div>
    )
}



export {
    Attributes,
    Attribute,
}
