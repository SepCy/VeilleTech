import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import News from './New'

const NewsList = () => {
    return (
        <View style = {styles.container}>
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
       paddingHorizontal: 15,
       paddingVertical: 5
    }
})

export default NewsList