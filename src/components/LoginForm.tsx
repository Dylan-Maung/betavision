import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@/src/context/auth'

export default function LoginForm() {
    const {signIn} = useAuth();

    return (
        <View className='flex-1 justify-center items-center'>
        <Text>LoginForm</Text>
        <Button title="Sign in with Google" onPress={() => signIn} />
        </View>
    )
}