import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';


const Detalle = ({ result }) => {
    return (
        <View style={{marginHorizontal:7,marginVertical:5}}>
            <Image style={styles.imagenStyle} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text >{result.rating} Estrellas, {result.review_count} Reseñas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imagenStyle: {
        width: 250,
        height: 120,
        borderRadius: 0

    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom:4
    },
    container:{
        marginLeft: 10
    }
});

export default Detalle;