import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar.js'
import yelp from '../API/yelp'

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
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

    return (
        <View>
            <SearchBar
                Term={term}
                onTermChange={setTerm}
                onTermSubmit={()=>searchAPI(term)}
            />
            <Text>Hemos encontrado {result.length} resultados</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;