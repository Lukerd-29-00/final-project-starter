import {useState} from "react"
interface Counter {
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

    const addButton = (label: string, incrementUp: () => void, incrementDown: () => void) => {
        let newButtons = new Array<Button>().concat(buttons)
        newButtons.push({label: label, counter: {value: 0, plus: incrementUp, minus: incrementDown}})
        setButtons(newButtons)
    }

    return [buttons, addButton]

}

export default useButtons