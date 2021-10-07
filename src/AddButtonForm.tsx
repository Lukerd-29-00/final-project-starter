import { useState } from "react";

type AddButtonFormProps = {
    addNewButton: (label: string) => void;
};
const AddButtonForm = (props: AddButtonFormProps) => {
    const [currentNewLabel, setCurrentNewLabel] = useState("");
    return (
        <div>
            <input
                id="custom label"
                value={currentNewLabel}
                onInput={(ev) =>
                    setCurrentNewLabel((ev.target as HTMLTextAreaElement).value)
                }
                placeholder="Add label of new button"
            ></input>
            <button
                onClick={() => {
                    props.addNewButton(currentNewLabel);
                    setCurrentNewLabel("");
                }}
            >
                Add Button
            </button>
        </div>
    );
};

export default AddButtonForm;
