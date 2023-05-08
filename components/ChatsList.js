import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ChatHead from '../ui/ChatHead';
import { users } from '../constants/users'
import { AntDesign } from '@expo/vector-icons';


const DATA = users;

const ChatsList = () => {
  return (
    <View style={styles.container}>
        <View style={styles.addCardContainer}>
            <View style={styles.iconContainer}>
                <AntDesign name="plus" size={24} color="black" />
            </View>
            <Text numberOfLines={2} style={{textAlign: 'center'}}>Add to Story</Text>
        </View>
      <FlatList 
        data={DATA}
        renderItem={({item}) => (
            item.isOnline && 
            <View style={styles.chatHeadContainer} >
                <ChatHead profileUrl={item.profileUrl} isOnline={item.isOnline} hasStory={item.hasStory} seenStory={item.seenStory} />
                <Text numberOfLines={2} style={{textAlign: 'center'}} >{item.userName}</Text>
            </View>
        )}
        keyExtractor={item => item.uid}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ChatsList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    addCardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60
    },
    iconContainer: {
        backgroundColor: '#eee',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chatHeadContainer: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    }
})