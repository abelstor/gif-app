import { useState } from 'react'

import { Button, Form, Input } from '@/styles'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimValue = inputValue.trim();
        if (trimValue.length <= 1) return;
        onNewCategory(trimValue);
        setInputValue('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button onSubmit={handleSubmit}>Add Gif</Button>
        </Form>
    )
}
