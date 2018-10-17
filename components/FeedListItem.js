import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
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
        <View style={styles.container}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: item.profile}}
                />
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
                <View>
                    <Text>{'>'}</Text>
                </View>
        </View>
    </TouchableHighlight>
);

FeedListItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedListItem;
