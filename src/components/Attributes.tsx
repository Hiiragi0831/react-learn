const Attribute = (props: any) => {
    return (
        <div className="attribute">
            <div className="attribute__box">
                <div className="attribute__name">{props.name}</div>
                <div className="attribute__value">{props.value}</div>
                <button className={`
                    attribute__btn 
                    ${props.isActive > 0 ? 'is-active' : ''}
                    ${props.value >= props.parent ? 'is-disabled' : ''}
                    `} onClick={props.onClick}>+</button>
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
                                key={attribute.name}
                                name={attribute.name}
                                value={attribute.value}
                                isActive={props.isActive}
                                parent={props.parent}
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
                            key={attribute.name}
                            name={attribute.name}
                            value={attribute.value}
                            isActive={props.isActive}
                            parent={attribute.parent}
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
