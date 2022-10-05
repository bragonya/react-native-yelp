import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const BusinessesHorizontalList = ({ businesses, title }) => {
    return (
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text> Results: {businesses.length} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default BusinessesHorizontalList;