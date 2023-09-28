/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Easing,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { blue } from 'react-native-reanimated';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SelectList} from 'react-native-dropdown-select-list';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEyeSlash, faImage, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}: {navigation: any}): JSX.Element => {
  const [category, setCategory] = React.useState('');
  // const categories = [
  //   { key: 'El', Value: 'Electronic' },
  //   { key: 'gr', Value: 'Atomobile' },
  //   { key: 'Ee', Value: 'Ele' },
  // ];
  const categories = [
    {id: 1, value: 'Proprietor'},
    {id: 2, value: 'Admin'},
    {id: 3, value: 'Teacher'},
    {id: 4, value: 'Student'},
    {id: 5, value: 'Parent'},
  ];

  const [disabled, setDisabled] = useState(true);
  const [roleValid, setRoleValid] = useState(false);
  const [message, setMessage] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleContinueBtn = () => {
    if (username.length > 3) console.log('Name is valid!');
    if (password.length > 3) console.log('Password is valid!');
    if (roleValid) console.log('Role is valid!');

    if (username.length > 3 && password.length > 3 && roleValid) {
      console.log('Everything is valid!');
      setDisabled(false);
    } else setDisabled(true);
  };

  useEffect(() => {
    handleContinueBtn();

    if (displayError) {
      setUsername('');
      setPassword('');
    }
  });

  function login(): {ok: boolean; errorMessage?: string} {
    if (username === 'King Rex' && password === 'King Shadow')
      return {ok: true};
    else return {ok: false, errorMessage: 'Please input the right information'};
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.loginContainer}>
         <View style={styles.header}>
          <FontAwesomeIcon icon={faImage} size={40}/>
        </View>
        <Text style={styles.login}>Log in</Text>
        <Text style={styles.loginText}>
          Enter your Email to Log in to Mauben app
        </Text>
        <View style={styles.entryContainer}>
          <TextInput
            style={styles.input}
            keyboardType={'email-address'}
            placeholder={'Email'}
            onChangeText={text => {
              setUsername(text);
              if (displayError) setDisplayError(false);
            }}
            value={username}
          />

          <View style={styles.pwFieldContainer}>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                // maxLength={4}
                placeholder={'Password'}
                onChangeText={text => {
                  setPassword(text);
                  if (displayError) setDisplayError(false);
                }}
                value={password}
              />
            <FontAwesomeIcon icon={faEyeSlash} color="grey" size={25} style={{position: 'absolute', right: 10, top: 10}}/>
          </View>
          

          <View style={styles.dropDownContainer}>
            <SelectList
              disabledItemStyles={styles.disabledDropdownItems}
              boxStyles={styles.dropDown}
              dropdownStyles={styles.dropDownBox}
              search={false}
              setSelected={setCategory}
              data={categories}
              placeholder={'Select Category'}
              onSelect={() => {
                console.log('Selected!');
                if (!roleValid) setRoleValid(true);
              }}
              // defaultOption={{ id: 3, value: 'Student' }}
            />
          </View>

          {displayError ? (
            <View style={[styles.input, styles.errorMessage]}>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size={22}
                color="#C30F34"
              />
              <Text style={styles.errorMessageText}>{message}</Text>
            </View>
          ) : null}

          <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.6}
            style={[
              styles.input,
              styles.continueBtn,
              {backgroundColor: disabled ? '#B6B6B6' : '#D39B3F'},
            ]}
            onPress={() => {
              const {ok, errorMessage} = login();
              if (!ok) {
                if (errorMessage) setMessage(errorMessage);
                setDisplayError(true);
              } else navigation.navigate('HomeScreen');
            }}>
            <Text
              style={[
                styles.continueBtnText,
                {color: disabled ? '#919191' : '#000'},
              ]}>
              Continue
            </Text>
          </TouchableOpacity>
          <View style={styles.forgotPWContainer}>
              <Text style={styles.blueText}>Forgot Your Password? </Text>
          </View>
          <View style={styles.termsContainer}>
            <Text>By signing up, you agree and you accept our 
              <Text style={styles.blueText}> Terms</Text>
              <Text> &</Text>
            </Text>
            <View style={styles.policy}>
              <Text>
                <Text style={styles.blueText}> Conditions</Text>
                    <Text> and</Text>
                <Text style={styles.blueText}> Privacy Policy</Text>
              </Text>
              </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  loginContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  login: {
    marginTop: 40,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  loginText: {
    marginTop: 6,
  },
  entryContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 15,
    gap: 15,
    // backgroundColor: '#ff0',
  },

  pwFieldContainer: {
    position: 'relative',
  },
  input: {
    // marginTop: 15,
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingLeft: 15,
  },
  dropDownContainer: {
    // marginTop: 15,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
  },
  dropDown: {
    borderColor: 'white',
    borderRadius: 20,
  },
  dropDownBox: {
    borderColor: 'white',
  },
  disabledDropdownItems: {
    marginBottom: 10,
  },
  errorMessage: {
    padding: 15,
    flexDirection: 'row',
    borderRadius: 0,
    gap: 10,
    backgroundColor: '#F9E6EA',
  },
  errorMessageText: {
    color: '#CA2A4B',
  },
  continueBtn: {
    padding: 12,
  },
  continueBtnText: {
    // fontWeight: 'bold',
    textAlign: 'center',
  },

  termsContainer: {
    alignItems: 'center',
  },
  
  forgotPWContainer: {
    alignItems: 'center',
  },

  blueText: {
    color: '#3D72FF',
  },

  policy: {
    alignItems: 'center',
  }
});

export default LoginScreen;
