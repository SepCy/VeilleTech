import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import * as rssParser from 'react-native-rss-parser';


export default class New extends React.Component {

    componentDidMount() {
        return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                console.log(rss.title);
                console.log(rss.items.length);
            });
    }

    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectur</Text>
            </View>
        )
    }
}







const styles = StyleSheet.create({
    card: {
        backgroundColor: 'grey',
        height: 110,
        marginVertical: 5
    },
    text: {

    }
})