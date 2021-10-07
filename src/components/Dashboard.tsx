import { ButtonHTMLAttributes, useState } from "react"
import useButtons from "../hooks/useButtons"
import {Button, Counter} from "../hooks/useButtons"

interface noProps {

}
function Dashboard(props: noProps){
    const [buttons, addButton] = useButtons()
    return (
        <>
            {buttons.map((value: Button, index: number) => {
                <div>
                    <button onClick = {() => {value.counter.plus()}}>{value.label}+</button>
                    <button onClick = {() => {value.counter.minus()}}>{value.label}-</button>
                    <span>{value.label + ": "}{value.counter.value}</span>
                </div>

            })}
            <button onClick = {() => addButton("tst")}>Add</button>
        </>
    )

}
export default Dashboard