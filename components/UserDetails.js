import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 16,
        paddingBottom: 16,
    },
});

const UserDetails = ({ user }) => {
    return (
        <React.Fragment>
            <Image source={{uri: user.profile}} style={{
                height: 300,
                marginBottom: 16,
            }}/>
            <View style={styles.row}>
                <Text>Phone</Text>
                <Text>{user.phone}</Text>
            </View>
            <View style={styles.row}>
                <Text>Email</Text>
                <Text>{user.email}</Text>
            </View>
        </React.Fragment>
    );
};

UserDetails.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserDetails;
