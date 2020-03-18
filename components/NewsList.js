import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import News from './New'

const NewsList = () => {
    return (
        <ScrollView style = {styles.container}>
            <News />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
       paddingHorizontal: 8,
       paddingVertical: 8
    }
})

export default NewsList