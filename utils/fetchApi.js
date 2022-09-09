import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4c506051bemsh9116edda191f8adp152864jsn0f3c0bc169e3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    // console.log( JSON.stringify(data) );
    return data;
}

