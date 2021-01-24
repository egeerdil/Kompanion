import React, {useState} from 'react';
import {View} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import AppButton from '../components/CustomButton';
import auth from '@react-native-firebase/auth';
import Logo from '../components/Logo';
const Login = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async ({email, password}) => {
    if (!email || !password) {
      return;
    }
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then((loggedInUser) => {
        //console.log("Login Successful!");
        navigate('Feed');
      })
      .catch((eror) => {
        console.log('Login fail!! ');
      });
  };
  {
    /*auth()
    .createUserWithEmailAndPassword('egeerdil@gmail.com', '123456')
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    }); */
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Logo />

      <CustomTextInput
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
      />

      <CustomTextInput
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
      />
      <AppButton
        title="Giriş Yap"
        onPress={() => onLogin({email: email, password: password})}
      />
    </View>
  );
};

export default Login;
