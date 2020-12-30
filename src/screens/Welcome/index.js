import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {IconFB, IconUsername, IconGoogle} from '../../assets'
const Welcome = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/image/logo1.png')}
            style={{width: '23%', height: 100}}
          />

          <Image
            source={require('../../assets/image/qlue.png')}
            style={{width: '26%', height: 60, left: 5, top: 20}}
          />
        </View>
      </View>

      <View style={{paddingTop: 20}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Welcome to Qlue!
        </Text>
      </View>

      <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            margin: 20,
            fontSize: 13,
          }}>
          Where you can contribute in fixing your cities by reporting problems to the city administration. Please Login or Register below!
        </Text>
      </View>

        <View style={{padding: 15}}>
      <View style={{marginTop: '30%'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.signin}>Log In with Username</Text>
              
              <IconUsername width={26} height={26} style={{position:'absolute', top: 8, left: 10}}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 8}}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.signin}>Log In with Facebook</Text>
              <IconFB width={26} height={26} style={{position:'absolute', top: 8, left: 10}}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 8}}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.signin}>Log In with Google</Text>
              
              <IconGoogle width={25} height={25} style={{position:'absolute', top: 8, left: 10}}/>
            </TouchableOpacity>
          </View>
          </View>

          <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            margin: 20,
            fontSize: 12,
          }}>Don't have an account yet? 
           <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}> Create One </Text>
        </Text>
      </View>
      <View style={{marginTop: '18%'}}>
          <Image
          source={require('../../assets/image/town.png')}
          style={{width: '100%', height:120}}
          />
      </View>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2395FF',
  },
  signin: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#FFF',
    textAlign: 'center',
    borderRadius: 6,
    padding: 12,
    width: '100%',

    color: '#fff'
    // backgroundColor:'pink'
  },
});
