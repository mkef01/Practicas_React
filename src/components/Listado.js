import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Detalle from '../components/Detalle'

const Listado = ({ titulo, results, navigation }) => {
    console.log(results);
    return (
        <View style={{ marginHorizontal: 15 }}>
            <Text style={styles.titleStyle}>{titulo}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('restaurantes')}>
                            <Detalle result={item} />
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Listado;