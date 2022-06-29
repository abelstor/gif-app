import { GifList } from './GifList'

import { GlobalStyles } from './styles'

export const GifApp = () => {

    return (
        <>
            <GlobalStyles />
            <h1 style={{ textAlign: 'center' }}>GifApp</h1>
            <GifList />
        </>
    )
}
