import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../uicomponents/SearchBar';

const SearchScreen = () => {
    const [textSearch, setTextSearch] = useState('');

    return(
        <View>
            <SearchBar 
                textSearch={textSearch} 
                onTextSearchChange={newText => setTextSearch(newText)}
                onTextSearchSubmitted={() => console.log('term was submitted')}
            />
            <Text>
                Search Screen
            </Text>
            <Text>{textSearch}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen;