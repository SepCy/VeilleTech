import React from 'react'
import { View, StyleSheet, Text,Image } from 'react-native'

import Search from './Search'


class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.mainHeader}>
                <View style={styles.logoSearch}>
                    <Image source={require('../assets/logo.png')} style={styles.logo}/>
                    <Search />
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    logoSearch: {
        marginTop: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    ,
    logo: {
        width:50,
        height:50

    },

    mainHeader: {
        justifyContent:"center",
        height: 95,
        paddingHorizontal: 15,
        backgroundColor: '#427bbc'
    }
})

export default Header