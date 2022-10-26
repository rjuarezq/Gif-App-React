import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        const newElement = inputValue.trim();
        if(newElement.length <=2) return;
        setinputValue('');
        onNewCategory(newElement);
    }

    return (

        <form onSubmit={ onSubmit }>
            <input 
                className="search" 
                type="text"
                placeholder="Ingrese su búsqueda"
                value = {inputValue}
                onChange={ (e) => onInputChange(e)} >
            </input>
        </form>

    );
};

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired
}