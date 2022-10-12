import React  from "react";
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import useGetBusiness from "../hooks/useGetBusiness";


const BusinessDetailScreen = ({ navigation }) => {
    let id = navigation.getParam("id");
    const [, business] = useGetBusiness(id);

    if(!business) return null;
    return (
        <View>
            <Text> {business.name} </Text>
            <FlatList
                data={business.photos}
                keyExtractor={ photo => photo }
                renderItem={ ({ item }) => {
                        return <Image style={styles.image} source={{uri: item }} />
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
});

export default BusinessDetailScreen;