import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

interface IAppProps {}

interface IAappState {
  email: string;
  password: string;
  errorMessage: string | null;
}

export default class App extends React.Component<IAppProps, IAappState> {
  constructor(props: Readonly<IAappState>) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  render() {
    LayoutAnimation.easeInEaseOut();

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <Image source={require('./assets/logo.png')} style={styles.logo} />

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                keyboardType={'email-address'}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>

            <View style={styles.passwordInputMargin}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Zaloguj się</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.buttonText}>
              Nie masz konta w MyApp?{' '}
              <Text style={styles.buttonLink}>Zarejestruj się</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.buttonText}>
              Nie możesz się zalogować?{' '}
              <Text style={styles.buttonLink}>Przypomnij hasło</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#222323',
  },
  logo: {
    marginTop: 100,
    alignSelf: 'center',
  },
  form: {
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#a8abb5',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#FFF',
  },
  passwordInputMargin: {
    marginTop: 32,
  },
  loginButton: {
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: '#2abfed',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
  buttonLink: {
    fontWeight: '500',
    color: '#2abfed',
  },
  bottomButton: {
    alignSelf: 'center',
    marginTop: 32,
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
});
