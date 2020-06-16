import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar.js'
import yelp from '../API/yelp';
import useSearchBar from '../Hook/useSearchScreen';
import Listado from '../components/Listado'


const SearchScreen = ({navigation}) => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useSearchBar();
    const filtroPrecio = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                Term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <Listado results={filtroPrecio('$')} titulo='Calidad Precio' navigation={navigation} />
                <Listado results={filtroPrecio('$$')} titulo='Economico' navigation={navigation} />
                <Listado results={filtroPrecio('$$$')} titulo='Caros' navigation={navigation} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;