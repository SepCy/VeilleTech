import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SearchBar, ThemeProvider, withTheme } from 'react-native-elements';


class Search extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
        };

    }
    


    updateSearch = search => {
        this.setState({ search });
    };



    render() {
        const { search } = this.state;

        const {theme, updateTheme, replaceTheme} = this.props


        return (
            <ThemeProvider theme={theme}>
                <View style={styles.SearchBar}>
                    <SearchBar
                        placeholder="Rechercher..."
                        onChangeText={this.updateSearch}
                        value={search}
                        round
                        inputContainerStyle={styles.inputStyle}
                        containerStyle = {{backgroundColor: 'transparent', padding: 0, borderBottomWidth: 0, borderTopWidth: 0 }}
                    />
                </View>
            </ThemeProvider>

        );
    }
}

const styles = StyleSheet.create({
    SearchBar: {
        width: '80%'
    },
    inputStyle: {
        backgroundColor: 'white',
        opacity: .9,
    }
})

export default withTheme(Search)