import React, {useState} from "react";
import './card.scss'

export default function CardComponent(props){
    const [showOptions, toggleOptions] = useState(false)
    return (
        <section className="card-container" onClick={()=> toggleOptions(!showOptions)}>
            {
                (showOptions)?
                (<ul className="card-list">
                    {props.category.options.map((option)=> {
                        return <li key={option}>{option}</li>
                    })}
                </ul>) : (
                    <>
                        <section className="top-card">
                            <img style={{height: 50 }} className="card-img" src={props.category.img} alt={props.category.name} />
                        </section>
                        <section className="bottom-card">
                            {props.category.name}
                        </section>
                    </>
                )
            }
            {props.category.name}
        </section>
    )
}