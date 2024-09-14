import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useState } from "react";


export default function Index() {

  // variables
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const [message, setMessage] = useState("");

  // functions
  const handlePress = () => {
    // Close keyboard
    Keyboard.dismiss();

    // Validate
    if (email === "" || pswd === "" || fname === "" || lname === "") {
      setMessage("please fill out all fields.");
      return;
    }

    setMessage("Registration Successful!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.paragraph}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFname(text)}
          value={fname}
          autoCapitalize={"words"}
          placeholder="Enter your first name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLname(text)}
          value={lname}
          autoCapitalize={"words"}
          placeholder="Enter your last name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize={"none"}
          placeholder="Enter your email adress"
          />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPswd(text)}
          value={pswd}
          autoCapitalize={"none"}
          placeholder="Enter your password"
          />

        {/* message */}
        {message && <Text style={styles.paragraph}>{message}</Text>}
        
        <View style={styles.button}>
          <Button title="Sign up" onPress={handlePress} />
          <View style={{ marginVertical: 10 }} />
          <Button title="Switch to login" onPress={handlePress} />
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  button: {
    alignSelf: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "24A0ED",
    borderRadius: 5,
  },
});
