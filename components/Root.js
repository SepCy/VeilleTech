import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from './Header'
import NewsList from './NewsList';

const Root = () => {
    return (
            <View style={styles.mainContent}>
                <Header />
                <NewsList />
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