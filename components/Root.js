import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from './Header'
import NewsList from './NewsList';
import Refresh from './Refresh';

const Root = () => {
    return (
            <View style={styles.mainContent}>
                <Header />
                <NewsList />
                <Refresh />
            </View>
    )
}


const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: '#EFF4F9'
    }
})

export default Root