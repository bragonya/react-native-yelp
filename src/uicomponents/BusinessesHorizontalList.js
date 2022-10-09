import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BusinessCell from '../uicomponents/BusinessCell'

const BusinessesHorizontalList = ({ businesses, title }) => {
    return (
        <View style = {styles.conatiner}>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator = { false }
                data={ businesses }
                renderItem={({ item }) => {
                    return <BusinessCell business = {item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default BusinessesHorizontalList;