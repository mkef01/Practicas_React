import {useEffect, useState} from 'react';
import yelp from '../API/yelp'

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit:20,
                    term: searchTerm,
                    location: 'California'
                }
            });
            setResult(response.data.businesses);
            setErrorMessage(' ');

        } catch (error) {
            setErrorMessage('Algo salio mal');
        }
    };

    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI,results,errorMessage];
};