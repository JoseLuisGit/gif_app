import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Text');

    const handleInput = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCategories( categories=> [inputValue, ...categories]  );
        setInputValue('');
    }

    return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value={ inputValue }
            onChange={ handleInput } 
        />
    </form>);
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}