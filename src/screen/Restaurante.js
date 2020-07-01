//Importacion de librerias necesarias
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import yelp from '../API/yelp';
import { FlatList } from 'react-native-gesture-handler';

//Componente HTML que regresa a la vista
const Restaurante = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
    <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({item}) => {
                return <Image style={styles.image} source={{uri:item}}/>
            }}
        />
    </View>);
};

//Apartado CSS
const styles = StyleSheet.create({
    image:{
        width:300,
        height:200
    },
    textStyle: {
        fontSize: 45,
        textAlign: "center"
    },
    TextStyle2: {
        fontSize: 20,
        textAlign: "right"
    }
});

//Exportarlo a la pagina principal
export default Restaurante;