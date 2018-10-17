import React, { Component } from 'react';
import { Text, View } from 'react-native';
import UserDetails from '../components/UserDetails';

class UserDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const user = navigation.getParam('user', {
            name: 'Alfredo',
        })
        return {
          title: user.name.split(' ')[0],
        };
      };

    render() {
        const { navigation } = this.props;
        const user = navigation.getParam('user', null);
        if (!user) {
            return (
                <View>
                    <Text>No user</Text>
                </View>
            );
        }
        return (
            <View style={{
                display: 'flex',
                flex: 1,
            }}>
                <UserDetails user={user}/>
            </View>
        );
    }
}

export default UserDetailsScreen;
