import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Linking, Image } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <View style={{ marginBottom: 100, justifyContent: "center", flexDirection: 'row' }}>
                <ScrollView style={styles.container}>
                    {
                        data.map((item, key) => {
                            return (
                                <View style={styles.card} key={key}>
                                    <Text style={styles.textTitle}>{item[0]}</Text>
                                    <Text style={styles.textDescription}>{item[1]}</Text>
                                    <Text style={styles.textPublished}>{item[2].slice(0, 22)}</Text>
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
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        position: 'absolute',
                        height: 60,
                        backgroundColor: '#427bbc',
                        borderRadius: 100,
                        zIndex: 10,
                        shadowColor: '#427bbc',
                        shadowOpacity: 0.9,
                        elevation: 10,
                        display: "flex",
                        bottom: 20
                    }}
                >
                     <Image source={require('../assets/refresh.png')} style={styles.refresh}/>
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
        marginVertical: 5,
        padding: 15,
        borderRadius: 5

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
        color: '#427bbc',
        marginVertical: 3,
        paddingRight: 10,
        marginLeft: 'auto',
        fontWeight: 'bold'

    },
    spinnerTextStyle: {
        color: '#FFF',
    },
    refresh: {
    }



})