import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
  <SafeAreaView>
      <Text>Homescreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'orange'
    }
})