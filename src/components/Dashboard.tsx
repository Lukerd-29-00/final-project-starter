import { ButtonHTMLAttributes, useState } from "react"
import useButtons from "../hooks/useButtons"
import {Button, Counter} from "../hooks/useButtons"

interface noProps {

}
export function Dashboard(props: noProps){
    const [buttons, addButtons] = useButtons()
    return (
        <>
            {buttons.map((value: Button, index: number) => {
                <div>
                    <button onClick = {() => {value.counter.plus()}}>+</button>
                    <span>{value.counter.value}</span>
                </div>

            })}
            <button>Add</button>
        </>
    )

}