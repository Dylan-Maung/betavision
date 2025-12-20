import "../global.css"
import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ActivityIndicator } from 'react-native-paper'
import { useAuth } from "../context/auth"
import LoginForm from "../components/LoginForm"
import { BASE_URL } from "@/constants/constants"
import { useState } from "react"

export default function Login() {
  const { user, isLoading, signOut, fetchWithAuth } = useAuth();
  const [data, setData] = useState<any>(null);

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

  async function getProtectedData() {
    const response = await fetchWithAuth(`${BASE_URL}/api/protected/data`, {
      method: "GET",
    });

    const responseData= await response.json();
    setData(responseData);
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>{user.sub}</Text>
      <Text> {user.name}</Text>
      <Text> {user.email}</Text>
      <Button title="Sign Out" onPress={signOut} />
      <Text> {JSON.stringify(data)}</Text>
      <Button title="Ex Fetch Data" onPress={getProtectedData} />
    </View>
  )
}