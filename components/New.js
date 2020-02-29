import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import * as rssParser from 'react-native-rss-parser';
// https://fs.univ-ndere.cm/?feed=comments-rss2
//http://www.univ-ndere.cm/?feed=rss2

export default class New extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            title: [],
            description: [],
            published: [],
            url: []



        }
    }



    componentDidMount() {

        return fetch('https://fs.univ-ndere.cm/?feed=rss2')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                let title = []
                let description = []
                let published = []
                let url = []

                for (let i = 0; i < rss.items.length; i++) {

                    title.push(rss.items[i].title)
                    description.push(rss.items[i].description)
                    published.push(rss.items[i].published)
                    url.push(rss.items[i].links[0].url)
                    console.log(i)
                }

                this.setState({
                    title: title,
                    description: description,
                    published: published,
                    url: url
                })
            }).catch(function (err) {
                console.log('There was an error' + err)
            });
    }

    render() {

        return (
            <View>
                {this.state.title.map((item) => {
                    return (
                        <View style={styles.card}>
                            <Text>{item}</Text>
                        </View>
                    )
                })}
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
