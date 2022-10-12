import React, {memo} from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import BusinessCell from '../uicomponents/BusinessCell'

const BusinessesHorizontalList = ({ businesses, title, navigation }) => {
    return (
        <View style = {styles.conatiner}>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator = { false }
                data={ businesses }
                keyExtractor = { ( item ) => { return item.id } }
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={ () => { navigation.navigate('BusinessDetail', { id: item.id }) } }>
                        <BusinessCell business = {item} />
                    </TouchableOpacity>
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

export default memo(withNavigation(BusinessesHorizontalList));