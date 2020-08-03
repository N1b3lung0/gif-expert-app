
export const getGifs = async(category) => {
    const apiKey = 'api_key=aYPpDr6mlD6iJ4eZP3Wjil9K6B7N10jN';
    const urlEndpoint = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&`;
    const resp = await fetch(urlEndpoint + apiKey);
    const { data } = await resp.json();
    const gifs = data.map( ({ id, title, images }) => ({ id, title, url: images?.downsized_medium.url }))

    return(gifs);
}