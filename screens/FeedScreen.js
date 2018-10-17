import React, { Component } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import FeedListItem from '../components/FeedListItem';
import FeedListContainer from '../components/FeedListContainer';

const FeedScreen = (props) => {
    return (
        <View style={{
            display: 'flex',
            flex: 1,
        }}>
            <FeedListContainer {...props}/>
        </View>
    );
}

FeedScreen.navigationOptions = {
    title: 'Feed',
};

export default FeedScreen;
