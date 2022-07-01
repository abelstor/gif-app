import { useState } from 'react'

import { AddCategory, GifGrid } from '@/components'
import { Container } from '@/styles/'

export const GifList = () => {

    const [categories, setCategories] = useState(['Facepalm']);

    const onNewCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <Container>
            <AddCategory onNewCategory={onNewCategory} />
            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </Container>
    )
}
