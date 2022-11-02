import { useState } from "react"

export const AddCategory = ({ emitAddCategory }) => {

    const [inputValue, setInputValue] = useState('Example')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // onSetCategories( (categories) => [ inputValue, ...categories] );
        emitAddCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}