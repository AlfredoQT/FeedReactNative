import React from 'react';

import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const feedListItemStyles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    column: {
        flex: 1,
    },
});

const FeedListItem = ({ item, onPress }) => (
    <TouchableHighlight onPress={onPress}>
        <View style={feedListItemStyles.container}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <View>
                    <Text>{item.name}</Text>
                </View>
                <View>
                    <Text>{item.email}</Text>
                </View>
        </View>
    </TouchableHighlight>
);

export default FeedListItem;
