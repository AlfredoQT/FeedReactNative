import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import FeedListItem from './FeedListItem';

const FeedList = ({ users, onPress }) => {
    return (
        <FlatList
            data={users.map(e => ({...e, key: e.id}))}
            renderItem={({item}) =>
                <FeedListItem key={item.key} item={item} onPress={() => onPress(item)} />
            }
        />
    );
}

FeedList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    onPress: PropTypes.func.isRequired,
};

export default FeedList;
