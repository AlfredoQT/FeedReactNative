import React from 'react';

import { connect } from 'react-redux';

import users from '../redux/modules/users';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import FeedList from './FeedList';

class FeedListContainer extends React.Component {
    componentDidMount() {
        const { loaded, loadUsers } = this.props;
        if (!loaded) {
            loadUsers();
        }
    }

    handlePress = (user) => {
        this.props.navigation.navigate('Details', {
            user,
        });
    }

    render() {
        const { loaded, users, error } = this.props;

        if (error) {
            return (
                <View>
                    <Text>Oh no!</Text>
                </View>
            );
        }

        if (!loaded) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }

        return <FeedList users={users} onPress={this.handlePress} />;
    }
}

export default connect(state => ({
    users: users.selectors.getUsers(state),
    loaded: users.selectors.isLoaded(state),
    loading: users.selectors.isLoading(state),
    error: users.selectors.getError(state),
}), { loadUsers: users.actionCreators.loadUsers })(FeedListContainer);
