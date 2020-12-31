import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import {Navbar} from '../../components';
import NavigationBar from 'react-native-navbar';
import {IconArrowLeft} from '../../assets'

const Login = (props) => {
  const [text, setText] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);
  const inputPassword = React.useRef();
  const [password, setPassword] = React.useState(null);
  

  const rightButtonConfig = {
    title: 'NEXT',
    handler: () => props.navigation.navigate('MainApp'),
  };
  
  return (
    <>
      <View style={styles.navbar}>
        <NavigationBar
          rightButton={rightButtonConfig}
        />
        <View style={{flexDirection:'row', position: 'absolute', top: 25}}
        >
        <IconArrowLeft width={20} height={20} style={{left: 10 ,top:5}}
        onPress={() => props.navigation.navigate('Welcome')}/>
        <Text style={{left: 30, color: '#2395FF', fontSize: 24, fontWeight: 'bold'}} >Log In</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center', marginTop: '5%'}}>
          <View style={styles.inputItem}>
            <TextInput
              style={{width: '100%', textAlign: 'center', fontSize: 16}}
              placeholder="Username"
              autoCapitalize={'none'}
              value={text}
              onChangeText={(text) => setText(text)}
              returnKeyType="next"
              underlineColorAndroid="#fff"
            />
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.inputItem}>
          <TextInput
          style={{width: '100%', textAlign: 'center', fontSize: 16}}
            placeholder="Password"
            autoCapitalize={'none'}
            onChangeText={(text) => setPassword(text)}
            returnKeyType="done"
            underlineColorAndroid="#fff"
            secureTextEntry={hidePassword}
          />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{padding: 15, flexDirection: 'row'}}>
            <Text>Forgot Something?</Text>
            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
              {' '}
              Reset your Password
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: '#dfe6e9',
  },
  inputItem: {
    width: '90%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2d3436',
    overflow: 'hidden',
  },
  navbar: {
    backgroundColor: '#fff',
    padding: 15,
  },
});
