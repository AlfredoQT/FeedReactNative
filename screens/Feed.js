import React, { Component } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import FeedListItem from '../components/FeedListItem';

class Feed extends Component {
    render() {
        return (
            <View style={{
                display: 'flex',
                flex: 1,
            }}>
                <FlatList
                    data={[
                    {key: 'Devin', name: 'Devin', email: 'alfredoq98@hotmail.com'},
                    {key: 'Jackson', name: 'Jackson', email: 'alfredoq98@hotmail.com'},
                    {key: 'James', name: 'James', email: 'alfredoq98@hotmail.com'},
                    {key: 'Joel', name: 'Devin', email: 'alfredoq98@hotmail.com'},
                    {key: 'John', name: 'Devin', email: 'alfredoq98@hotmail.com'},
                    {key: 'Jillian', name: 'Devin', email: 'alfredoq98@hotmail.com'},
                    {key: 'Jimmy', name: 'Devin', email: 'alfredoq98@hotmail.com'},
                    {key: 'Julie', name: 'Julie', email: 'alfredoq98@hotmail.com'},
                  ]}
                  renderItem={({item}) => (
                        <FeedListItem item={item} key={item.key} onPress={() => this.props.navigation.navigate('Details')} />
                    )}
                />
                />
            </View>
        );
    }
}

export default Feed;
