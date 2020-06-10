import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar.js'
import yelp from '../API/yelp';
import useSearchBar from '../Hook/useSearchScreen';
import Listado from '../components/Listado'


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useSearchBar();

    const filtroPrecio = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{flex:1}}>
            <SearchBar
                Term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <Listado results={filtroPrecio('$')} titulo='Calidad Precio' />
                <Listado results={filtroPrecio('$$')} titulo='Economico' />
                <Listado results={filtroPrecio('$$$')} titulo='Caros' />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;