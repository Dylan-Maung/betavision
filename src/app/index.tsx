import "../global.css"
import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ActivityIndicator } from 'react-native-paper'
import { useAuth } from "../context/auth"
import LoginForm from "../components/LoginForm"

export default function Login() {
  const { user, isLoading, signOut } = useAuth();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    )
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>{user.sub}</Text>
      <Text> {user.name}</Text>
      <Text> {user.email}</Text>
      <Link href="/Home" push asChild>
        <Button title="Sign Out" onPress={signOut} />
      </Link>
    </View>
  )
}