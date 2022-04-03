

 export const getGifs = async (category) => {
    const api_key = 'XSxtLtMrZ8oQiPDGF4AFSHyBJv6ByUQs';
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${api_key}&limit=${10}`
    const fetchData = await fetch(url);
    const { data } = await fetchData.json();


    const getGifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        };
    });
    
    return getGifs;
}