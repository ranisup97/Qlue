import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import {
  IconArrowLeft,
  IconFlood,
  IconFire,
  IconTrash,
  IconRoad,
} from '../../assets';
const WriteReport = (props) => {
  const [text, setText] = React.useState('');
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'fff'}}>
        <View style={styles.navbar}>
          <View style={{flexDirection: 'row'}}>
            <IconArrowLeft
              width={20}
              height={20}
              style={{left: 10, top: 5}}
              onPress={() => props.navigation.navigate('Home')}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#2395FF',
                left: 30,
                fontWeight: 'bold',
              }}>
              Write Report
            </Text>
          </View>
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 35,
          }}>
          <Image
            style={{
              width: 500,
              height: 300,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: '5%'}}>
          <View style={styles.inputItem}>
            <TextInput
              style={{width: '100%', fontSize: 14}}
              placeholder="Search Report Label..."
              autoCapitalize={'none'}
              value={text}
              onChangeText={(text) => setText(text)}
              returnKeyType="next"
              underlineColorAndroid="#fff"
            />
          </View>
        </View>
        <ScrollView horizontal>
          <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 20}}>
            <View style={{alignItems: 'center'}}>
              <IconTrash width={30} height={30} />
              <Text style={{paddingTop: 10}}>Sanitation</Text>
            </View>

            <View style={{alignItems: 'center', paddingLeft: 20}}>
              <IconFlood width={30} height={30} />
              <Text style={{paddingTop: 10}}>Flood</Text>
            </View>

            <View style={{alignItems: 'center', paddingLeft: 20}}>
              <IconFire width={30} height={30} />
              <Text style={{paddingTop: 10}}>Fire</Text>
            </View>
            <View style={{alignItems: 'center', paddingLeft: 20}}>
              <IconRoad width={30} height={30} />
              <Text style={{paddingTop: 10}}>Road Damage</Text>
            </View>
          </View>
        </ScrollView>

          <View style={styles.inputItem2}>
            <TextInput
              style={{width: '100%',  fontSize: 14}}
              placeholder="Write Description"
              autoCapitalize={'none'}
              value={text}
              onChangeText={(text) => setText(text)}
            //   returnKeyType="enter"
              underlineColorAndroid="#fff"
            />
          </View>

        <View style={{alignItems: 'center', marginTop: 200, height: 90}}>
          <TouchableOpacity
            style={styles.addPictureIcon2}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={{color: '#fff', fontSize: 20}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default WriteReport;

const styles = StyleSheet.create({
  addPictureIcon: {
    height: 70,
    width: 90,
    backgroundColor: '#2395FF',
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  addPictureIcon2: {
    height: 60,
    width: '100%',
    backgroundColor: '#7f8fa6',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: '#fff',
    padding: 20,
  },
  inputItem: {
    width: '90%',
    height: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#7f8fa6',
    overflow: 'hidden',
  },
  inputItem: {
    width: '90%',
    height: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#7f8fa6',
    overflow: 'hidden',
  },
});
