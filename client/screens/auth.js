import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock as fasLock,faEnvelope as farEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEye as farEye, faEyeSlash as farEyeSlash} from '@fortawesome/free-regular-svg-icons'; 

const Tab = createMaterialTopTabNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>REVERIE FACADE</Text>

      <TouchableOpacity style={styles.externalButton}>
        <Text style={styles.externalButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.externalButton}>
        <Text style={styles.externalButtonText}>Login with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with email</Text>
      <View style={styles.inputContainer}>
  <View style={styles.icon}>
    <FontAwesomeIcon icon={farEnvelope} size={20} color="gray" />
  </View>
  <TextInput
    style={styles.input} 
    placeholder="Email Address"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    autoCapitalize="none"
  />
</View>
<View style={styles.inputContainer}>
  <View style={styles.icon}>
    <FontAwesomeIcon icon={fasLock} size={20} color="gray" />
  </View>
  <TextInput
    style={styles.input} 
    placeholder="Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={!showPassword}
  />
  <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
    <FontAwesomeIcon icon={showPassword ? farEye : farEyeSlash} size={20} color="gray" />
  </TouchableOpacity>
</View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}>Forgot password?</Text>

      <Text style={styles.termsText}>
        By signing in with an account, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>REVERIE FACADE</Text>
      <Text style={styles.subtitle}>Create an account</Text>
      <Text style={styles.instruction}>Enter your email to sign up for this app</Text>

      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordScreen')}>
        <Text style={styles.buttonText}>Sign up with email</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By clicking continue, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const App = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Sign Up" component={SignUpScreen} />
      </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
  },
  input: {
    flex: 1,
    height: 45,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width:'auto',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7EDF1',
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#1F1F1F',
    marginBottom: 5,
  },
  instruction: {
    fontSize: 14,
    color: '#1F1F1F',
    marginBottom: 20,
    textAlign: 'center',
  },
  icon: {
    padding: 10,
    width:'10%',
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0A1366',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  externalButton: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  externalButtonText: {
    fontSize: 16,
    color: '#1F1F1F',
  },
  orText: {
    fontSize: 14,
    color: '#1F1F1F',
    marginBottom: 10,
  },
  googleButton: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  googleButtonText: {
    fontSize: 16,
    color: '#1F1F1F',
  },
  linkText: {
    color: '#4D6175',
    textDecorationLine: 'underline',
  },
  termsText: {
    fontSize: 12,
    color: '#4D6175',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
