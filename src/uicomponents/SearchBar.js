import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({textSearch, onTextSearchChange, onTextSearchSubmitted}) => {

    return(
        <View style = {styles.background}>
            <Feather name="search" size={30} style={styles.iconStyle} />
            <TextInput 
                placeholder="Search" 
                style= {styles.inputStyle}
                value= {textSearch}
                onChangeText= {onTextSearchChange}
                onEndEditing= {onTextSearchSubmitted}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;