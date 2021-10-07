import {useState} from "react"
export interface Counter {
    value: number,
    plus: () => void,
    minus: () => void
}

export interface Button {
    counter: Counter
    label: string
}

function useButtons(): [Array<Button>, (label: string, incrementUp: () => void, incrementDown: () => void) => void]{
    const [buttons, setButtons] = useState(new Array<Button>())
    const increment = (i: number, x: number) => {
        let newButtons = new Array<Button>()
        newButtons[i].counter.value += x
        setButtons(newButtons)
    }

    const addButton = (label: string) => {
        let newButtons = new Array<Button>().concat(buttons)
        newButtons.push({label: label, counter: {value: 0, plus: () => {increment(newButtons.length,1)}, minus: () incrementDown}})
        setButtons(newButtons)
    }

    return [buttons, addButton]

}

export default useButtons