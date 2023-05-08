import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { users } from '../constants/users'
import MessageCard from '../ui/MessageCard';

const DATA = users;

const Messages = () => {
  return (
    <View>
      {DATA.map((user) => <MessageCard key={user.uid} userDetail={{...user}} />)}
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})