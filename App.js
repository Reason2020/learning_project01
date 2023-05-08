import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import ChatsList from './components/ChatsList';
import Messages from './components/Messages';

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView contentContainerStyle={{paddingLeft: 5}} >
          <Text style={styles.headingText}>Chats</Text>
          <ChatsList />
          <Messages />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15
  }
});
