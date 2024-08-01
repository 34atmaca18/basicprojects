'use client'

import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_MY_KEY
const url = process.env.NEXT_PUBLIC_MY_URL
const tokenKey = process.env.NEXT_PUBLIC_MY_TOKEN

export const myAxios = axios.create({
    baseURL: `${url}`,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${tokenKey}`
    }
})

export const fetchMovies = async () => {
    try {
        console.log(url)
      const response = await myAxios.get('/21416604/watchlist/movies');
      console.log(response.results)
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };
