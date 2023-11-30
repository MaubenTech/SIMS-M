/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import {
  // Dimensions,
  // Image,
  // Easing,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import { blue } from 'react-native-reanimated';
// import { ParamListBase, useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash, faImage, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { dispatchCommand } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import roleSlice, { Role, RoleStateType, roleActions } from "../../redux/roleSlice";
import { AuthStateType, authActions } from "../../redux/authSlice";
import { ReduxStates } from "../../redux";
import { useNavigation } from "@react-navigation/native";
import RootCustomNavigation from "../../navigation/custom_navigation";

// const { width, height } = Dimensions.get('window');

const LoginScreen = (): JSX.Element => {
  const navigation = useNavigation<RootCustomNavigation>();
  const userStatus = useSelector((state: ReduxStates) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const categories: { id: number; name: Role }[] = [
    { id: 1, name: "Principal" },
    { id: 2, name: "Admin" },
    { id: 3, name: "Teacher" },
    { id: 4, name: "Student" },
    { id: 5, name: "Parent" },
  ];

  const nameArray = categories.map((category) => category.name);

  const [category, setCategory] = React.useState<Role>();

  const [disabled, setDisabled] = useState(true);
  const [roleValid, setRoleValid] = useState(false);
  const [message, setMessage] = useState("");
  const [displayError, setDisplayError] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (username.length > 3) console.log("Name is valid!");
    if (password.length > 3) console.log("Password is valid!");
    if (roleValid) console.log("Role is valid!");

    if (username.length > 3 && password.length > 3 && roleValid) {
      console.log("Everything is valid!");
      setDisabled(false);
    } else setDisabled(true);

    if (displayError) {
      setUsername("");
      setPassword("");
    }

    if (userStatus) navigation.navigate("BottomTabNavigation");
  }, [username.length, password.length, roleValid, displayError, userStatus]);

  function login(): { ok: boolean; errorMessage?: string } {
    dispatch(authActions.login(userDetails));

    console.log("User status again after on press is: " + userStatus);
    if (userDetails) {
      dispatch(roleActions.setRole(category!));
      return { ok: true };
    } else {
      setDisplayError(true);
      return { ok: false, errorMessage: "Please input the right information" };
    }
  }

  const userDetails = {
    username,
    password,
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.loginContainer}>
        <View style={styles.header}>
          <FontAwesomeIcon icon={faImage} size={40} />
        </View>
        <Text style={styles.login}>Log in</Text>
        <Text style={styles.loginText}>Enter your Email to Log in to Mauben app</Text>
        <View style={styles.entryContainer}>
          <TextInput
            style={styles.input}
            keyboardType={"email-address"}
            placeholder={"Email"}
            onChangeText={(text) => {
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
              placeholder={"Password"}
              onChangeText={(text) => {
                setPassword(text);
                if (displayError) setDisplayError(false);
              }}
              value={password}
            />
            <FontAwesomeIcon icon={faEyeSlash} color="grey" size={25} style={{ position: "absolute", right: 10, top: 10 }} />
          </View>
          <View style={styles.dropDownContainer}>
            <SelectList
              disabledItemStyles={styles.disabledDropdownItems}
              boxStyles={styles.dropDown}
              dropdownStyles={styles.dropDownBox}
              search={false}
              setSelected={setCategory}
              data={nameArray}
              placeholder={"Select Category"}
              onSelect={() => {
                console.log("Selected!");
                if (!roleValid) setRoleValid(true);
              }}
              // defaultOption={{ id: 3, value: 'Student' }}
            />
          </View>

          {displayError ? (
            <View style={[styles.input, styles.errorMessage]}>
              <FontAwesomeIcon icon={faTriangleExclamation} size={22} color="#C30F34" />
              <Text style={styles.errorMessageText}>{message}</Text>
            </View>
          ) : null}

          <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.6}
            style={[styles.input, styles.continueBtn, { backgroundColor: disabled ? "#B6B6B6" : "#D39B3F" }]}
            onPress={() => {
              const { ok, errorMessage } = login();
            }}
          >
            <Text style={[styles.continueBtnText, { color: disabled ? "#919191" : "#000" }]}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.forgotPWContainer}>
            <Text style={styles.blueText}>Forgot Your Password? </Text>
          </View>
          <View style={styles.termsContainer}>
            <Text>
              By signing up, you agree and you accept our
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
    alignItems: "center",
    marginTop: 50,
  },
  loginContainer: {
    // alignItems: 'center',
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  login: {
    marginTop: 40,
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
  },
  loginText: {
    marginTop: 6,
  },
  entryContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 15,
    gap: 15,
    // backgroundColor: '#ff0',
  },

  pwFieldContainer: {
    position: "relative",
  },
  input: {
    // marginTop: 15,
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    borderColor: "white",
    paddingLeft: 15,
  },
  dropDownContainer: {
    // marginTop: 15,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 20,
  },
  dropDown: {
    borderColor: "white",
    borderRadius: 20,
  },
  dropDownBox: {
    borderColor: "white",
  },
  disabledDropdownItems: {
    marginBottom: 10,
  },
  errorMessage: {
    padding: 15,
    flexDirection: "row",
    borderRadius: 0,
    gap: 10,
    backgroundColor: "#F9E6EA",
  },
  errorMessageText: {
    color: "#CA2A4B",
  },
  continueBtn: {
    padding: 12,
  },
  continueBtnText: {
    // fontWeight: 'bold',
    textAlign: "center",
  },

  termsContainer: {
    alignItems: "center",
  },

  forgotPWContainer: {
    alignItems: "center",
  },

  blueText: {
    color: "#3D72FF",
  },

  policy: {
    alignItems: "center",
  },
});

export default LoginScreen;
