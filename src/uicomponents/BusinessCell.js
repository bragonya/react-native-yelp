import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';

const BusinessCell = ({ business }) => {
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source = { { uri: business.image_url } }/>
                <Text style = {styles.name}>
                    { business.name }
                </Text>
                <Text>
                    { business.rating } Stars, { business.review_count } Reviews
                </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    name: {
        fontWeight: 'bold',
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    }
});

export default BusinessCell;