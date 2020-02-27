import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Search from './Search'


const Header = () => {
    return (
        <View style={styles.mainHeader}>
            <View style={styles.logoSearch}>
                <Text style={styles.logo}>Logo</Text>
                <Search />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    logoSearch: {
        marginTop: 31,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    ,
    logo: {

    },

    mainHeader: {
        height: 80,
        paddingHorizontal: 15,
        backgroundColor: 'blue'
    }
})

export default Header