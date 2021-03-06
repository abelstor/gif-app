import { useEffect, useState } from 'react'
import { getGifs } from '@/helpers'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const dataImages = await getGifs(category);
        setImages(dataImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, []);

    return { images, isLoading }
}
