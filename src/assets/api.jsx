import axios from "axios";

const URL= 'https://youtube138.p.rapidapi.com'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '15eb6a1468msh4d43cede84c7870p130005jsnca34ca9bd42d',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchAPIData = (async (url)=> {
    const {data} = await axios.get(`${URL}/${url}`, options)
    return data;
} )

