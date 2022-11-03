import { useState } from "react"
import { PropTypes } from 'prop-types';

export const AddCategory = ({ emitAddCategory }) => {

    const [inputValue, setInputValue] = useState('')

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
            <form onSubmit={ onSubmit } aria-label="form-test" >
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

AddCategory.propTypes = {
    emitAddCategory: PropTypes.func.isRequired
}