import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHead from './ChatHead';

const MessageCard = ({ userDetail }) => {
  const { profileUrl, userName, lastMessage, seen, timeStamp, isOnline, hasStory, seenStory } = userDetail;
  return (
    <View style={styles.container} >
      <View style={styles.chatHeadContainer}>
        <ChatHead profileUrl={profileUrl} isOnline={isOnline} hasStory={hasStory} seenStory={seenStory} />
      </View>
      <View style={styles.messageSection}>
        <Text style={styles.userName}>{userName}</Text>
        <View style={styles.messageBody}>
          <Text style={!seen && {fontWeight: 'bold'}} >{lastMessage}</Text>
          <View style={styles.separator}></View>
          <Text>{timeStamp}</Text>
        </View>
      </View>
    </View>
  )
}

export default MessageCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 6
  },
  messageSection: {
    flexGrow: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  userName: {
    fontSize: 16
  },
  messageBody: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    height: 2,
    width: 2,
    backgroundColor: '#000',
    borderRadius: 1,
    marginHorizontal: 5
  }
})