import React from 'react'
import { View, StyleSheet, Text, ScrollView,TouchableOpacity, Linking } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

import * as rssParser from 'react-native-rss-parser';
// https://fs.univ-ndere.cm/?feed=comments-rss2
//http://www.univ-ndere.cm/?feed=rss2


export default class NewsList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            title: [],
            description: [],
            published: [],
            url: [],
            loading: true

        }

        this.GetRssFeed = this.GetRssFeed.bind(this)
    }

    GetRssFeed = () => {
        this.setState({ loading: true })
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
                    loading: false
                })
            }).catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.GetRssFeed()
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
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.loading}
                    //Text with the Spinner 
                    textContent={'Loading...'}
                    //Text style of the Spinner Text
                    textStyle={styles.spinnerTextStyle}
                />
            )
            // console.log('loading')
        }

        return (
            <View>
                <ScrollView style={styles.container}>
                    {
                        data.map((item, key) => {
                            return (
                                <View style={styles.card} key={key}>
                                    <Text style={styles.textTitle}>{item[0]}</Text>
                                    <Text style={styles.textDescription}>{item[1]}</Text>
                                    <Text style={styles.textPublished}>{item[2]}</Text>
                                    <Text style={styles.textUrl}
                                    onPress={() => Linking.openURL(`${item[3]}`)}
                                    >Visiter</Text>
                                </View>
                            )
                        })
                    }

                </ScrollView >
                <TouchableOpacity onPress={() => { this.GetRssFeed() }}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,255,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        position: 'absolute',
                        height: 80,
                        backgroundColor: 'blue',
                        borderRadius: 100,
                        zIndex: 10,
                        right: 20,
                        bottom: 100,
                        shadowColor: 'rgba(0,255,0,0.2)',
                        shadowOpacity: 0.9,
                        elevation: 10,
                    }}
                >
                </TouchableOpacity>
            </View>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8
    },
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
        marginVertical: 3,
        opacity: .7
    },
    textUrl: {
        color: 'blue',
        marginVertical: 3,
        paddingRight: 10,
        marginLeft: 'auto',
        fontWeight: 'bold'

    },
    spinnerTextStyle: {
        color: '#FFF',
    },



})