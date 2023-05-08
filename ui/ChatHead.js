import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const ChatHead = ({ profileUrl, isOnline, hasStory, seenStory }) => {
  return (
    <View style={styles.container}>
        <Image 
            source={{uri: profileUrl}}
            style={[styles.chatHead, hasStory ? (seenStory ? {borderWidth: 3, borderColor: "#535353"} : {borderWidth: 3, borderColor: '#0078ff'}) : null]}
        />
        {isOnline && (
            <View style={styles.onlineIndicator}></View>
        )}
    </View>
  )
}

export default ChatHead

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatHead: {
        height: 60,
        width: 60,
        borderRadius: 30,
        resizeMode: 'contain',
        marginHorizontal: 8
    },
    onlineIndicator: {
        backgroundColor: '#40D751',
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2.5,
        borderColor: '#000',
        position: 'absolute',
        top: 45,
        left: 45
    }
})