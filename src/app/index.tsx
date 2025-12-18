import "../global.css"
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ActivityIndicator, Button } from 'react-native-paper'
import { useAuth } from "../context/auth"
import LoginForm from "../components/LoginForm"

export default function Login() {
  const { user, isLoading } = useAuth();

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
      <Text className=' justify-center'>Login</Text>
      <Link href="/Home" push asChild>
        <Button>Navigate to Home Page</Button>
      </Link>
    </View>
  )
}