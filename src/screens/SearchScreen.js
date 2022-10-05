import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../uicomponents/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessesHorizontalList from '../uicomponents/BusinessesHorizontalList';

const SearchScreen = () => {
    const [textSearch, setTextSearch] = useState('');
    const [searchApi, businesses] = useBusinesses();

    const filterByPrice = (priceRateLow, priceRateHigh) => {
        return businesses.filter( business => {
            let size = business.price?.length ?? 1
            return  size>= priceRateLow && size <= priceRateHigh;
        });
    }
    return(
        <View>
            <SearchBar 
                textSearch={textSearch} 
                onTextSearchChange={newText => setTextSearch(newText)}
                onTextSearchSubmitted={text => searchApi(text)}
            />
            <Text>
                Search Screen
            </Text>
            <Text>We have found {businesses.length} results</Text>
            <BusinessesHorizontalList businesses = {filterByPrice(1,1)} title="Cost Effective" />
            <BusinessesHorizontalList businesses = {filterByPrice(2,2)} title="Bit Pricer" />
            <BusinessesHorizontalList businesses = {filterByPrice(3,100)} title="Big Spender" />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen;