import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Detalle from '../components/Detalle'
import {withNavigation} from 'react-navigation'

const Listado = ({ titulo, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={{ marginHorizontal: 15 }}>
            <Text style={styles.titleStyle}>{titulo}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('restaurantes',{id:item.id})}>
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

export default withNavigation(Listado);