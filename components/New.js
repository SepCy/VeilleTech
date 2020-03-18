import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Loading from '../assets/icon.png'

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
            url: [],
            loading: true

        }
    }



    componentDidMount() {

        return fetch('http://www.univ-ndere.cm/?feed=rss2')
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
                };

                this.setState({
                    title: title,
                    description: description,
                    published: published,
                    url: url,
                    loading: !this.state.loading
                })
            })
    }

    render() {
        const title = this.state.title
        const description = this.state.description
        const published = this.state.published
        const url = this.state.url

        const data = []

        for (let i = 0; i < title.length; i++) {
            data.push([title[i], description[i], published[i], url[i]])
        };
        // Setting loading icon
        if (this.state.loading) {
            return (
                   <Image source = {require('../assets/loader.svg')} /> 
            )
            // console.log('loading')
        }

        console.log('Finished loading')
        return (

            <View>
                {
                    data.map((item) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.textTitle}>{item[0]}</Text>
                                <Text style={styles.textDescription}>{item[1]}</Text>
                                <Text style={styles.textPublished}>{item[2]}</Text>
                                <Text style={styles.textUrl}>{item[3]}</Text>
                            </View>
                        )
                    })
                }
            </View >
        )
    }

}



const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginVertical: 3,
        padding: 15,
        borderRadius: 2

    },
    textTitle: {
        marginVertical: 3,
        fontWeight: 'bold'
    },
    textDescription: {
        marginVertical: 3,
        textAlign: 'justify',
        letterSpacing: .5,
        lineHeight: 18
    },
    textPublished: {
        marginVertical: 3
    },
    textUrl: {
        marginVertical: 3
    }



})
