export const fetchSeries = () => 
    fetch("https://api.tvmaze.com/shows")

export const fetchDetail = (id) => 
    fetch(`https://api.tvmaze.com/shows/${id}`)
