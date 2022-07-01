import { GifItem } from './GifItem'

import { useFetchGifs } from '@/hooks'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {isLoading && <p>Loading...</p>}
            <GifItem images={images} category={category} />
        </>
    )
}
