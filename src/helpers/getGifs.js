//
const urlBase = import.meta.env.VITE_URL_BASE;
const apiKey = import.meta.env.VITE_API_KEY;

export const getGifs = async (category) => {

    const url = `${urlBase}/search?q=${category}&limit=12&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    return gifs;
}