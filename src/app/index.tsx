import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAuth } from '../context/auth'
import { Redirect } from 'expo-router';

export default function index() {
    const { user, isLoading, onboarded } = useAuth();

    if (isLoading) {
        return <ActivityIndicator />;
    }

    console.log(user)
    if (user === null && !onboarded) {
        console.log("user is: ", user, "going to login");
        return <Redirect href="/login" />;
    }

    if (user !== null && !onboarded) {
        console.log("Onbaorded is : ", onboarded, "going to onboard");
        return <Redirect href="/onboarding" />;
    }

    return <Redirect href="/(mainTabs)/home" />;
}