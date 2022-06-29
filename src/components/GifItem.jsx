
export const GifItem = ({ category, images }) => {

    return (
        <>
            <h2>{category}</h2>
            <ol>
                {images.map(cat => (
                    <li key={cat.id}>
                        <img src={cat.url} alt={cat.title} />
                        <h4>{cat.title}</h4>
                    </li>
                ))}
            </ol>
        </>
    )
}
