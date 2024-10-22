import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': '45b8eecb61msh910f6327e267062p14d4d0jsn3b0b591138b5',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
          },  
        params: { ...query },
      };
      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error');
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return { data, isLoading, error, refetch };
}
export default useFetch;