import React from 'react'
import { StyleSheet, Image, TouchableOpacity, } from 'react-native'

const Refresh = () => {
    return (
        <TouchableOpacity onPress={() => { console.log('clicked') }}
            style={{
                borderWidth: 1,
                borderColor: 'rgba(0,255,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                position: 'absolute',
                height: 70,
                backgroundColor: 'blue',
                borderRadius: 100,
                zIndex: 10,
                bottom: 15,
                right: 15
            }}
        >
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
})

export default Refresh