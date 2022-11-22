import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const res = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'db6c356305mshf8581a6df78962bp153622jsnc15f64aec7f1'
            }
        })
    const data = res.data;
    return data;
}