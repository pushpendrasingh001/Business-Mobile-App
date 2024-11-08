import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';

import { Colors } from '@/constants/Colors';
import {useWarmUpBrowser} from './../hooks/useWarmUpBrowser'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  // Warm up the web browser
  useWarmUpBrowser();

  // Set up OAuth with Google strategy
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  // Handle OAuth flow when user presses the button
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else if (signIn || signUp) {
        console.log("Proceeding with sign-in or sign-up...");
      } else {
        console.warn("OAuth flow did not return a session or sign-in object.");
      }
    } catch (err) {
      console.error("OAuth error", err);
      Alert.alert("Authentication Failed", "Please try again.");
    }
  }, [startOAuthFlow]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./../assets/images/2341.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.titleText}>
          Your Ultimate <Text style={styles.highlightedText}>Community Business Directory</Text> App
        </Text>
        <Text style={styles.descriptionText}>
          Find your favorite business near you and post your own business to your community
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Define styles separately for better organization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    display: 'flex',
    marginTop: 100,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 450,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: 'black',
  },
  subcontainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: -20,
  },
  titleText: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Outfit-SemiBold',
  },
  highlightedText: {
    color: Colors.PRIMARY,
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    marginVertical: 15,
    color: Colors.GRAY,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Outfit-Medium',
  },
});

