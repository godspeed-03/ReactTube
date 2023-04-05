import axios from "axios";

const URL= 'https://youtube138.p.rapidapi.com'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '936f2d8fdamshe74acf6f6760c5dp13d1a4jsnd907dd01cbfc',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchAPIData = (async (url)=> {
    const {data} = await axios.get(`${URL}/${url}`, options)
    return data;
} )

