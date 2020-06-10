import {useEffect, useState} from 'react';
import yelp from '../API/yelp'

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit: 30,
                    term: searchTerm,
                    location: 'new york'
                }
            });
            setResult(response.data.businesses);
            setErrorMessage(' ');

        } catch (error) {
            setErrorMessage('Algo salio mal');
        }
    };

    useEffect(() => {
        searchAPI('sushi');
    }, []);

    return [searchAPI,results,errorMessage];
};