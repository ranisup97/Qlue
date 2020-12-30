import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IconBell} from '../../assets';

const Home = ({props}) => {
  return (
    <>
      <View style={styles.navbar}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={styles.ImageLogo}
        />
        <View style={styles.IconBell}>
          <IconBell />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.town}>
            <View style={styles.townWidth}>
              <Image
                source={require('../../assets/image/town.png')}
                style={styles.ImageTown1}
              />
              <Text
                style={styles.text1}>
                Current Informations around
              </Text>
              <Text
                style={styles.text2}>
                CIRIUNG
              </Text>
              <TouchableOpacity
                style={styles.button}>
                <Text style={styles.viewdetail}>View Detail</Text>
              </TouchableOpacity>
            </View>

            <View style={{width: '100%', padding: 5}}>
              <Image
                source={require('../../assets/image/town2.jpg')}
                style={styles.imagetown2}
              />
            </View>
          </View>
        </View>

        <View>
          <View>
            {/* <Image source={{uri: 'https://i.pinimg.com/236x/f6/e4/df/f6e4dfc2834fafdc38caec39ed628748.jpg'}} /> */}
            <Text>nama profile</Text>
          </View>
          <View>
            <Text>image</Text>
          </View>
          <View>
            <Text>icon</Text>
          </View>
          <View>
            <Text>Comentar</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
  },
  container: {
    // backgroundColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: '#dfe6e9',
  },
  ImageLogo: {width: '25%', height: 50},
  IconBell: {right: '0%', position: 'absolute', right: 20, top: 20},
  town: {marginTop: 8, flexDirection: 'row'},
  townWidth: {width: '90%', padding: 5},
  ImageTown1: {
    width: '100%',
    height: 150,
    opacity: 0.5,
    borderRadius: 5,
  },
  text1: {
    position: 'absolute',
    color: '#fff',
    fontSize: 18,
    left: '20%',
    top: '20%',
  },
  text2: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    left: '40%',
    top: '40%',
  },
  button: {
    position: 'absolute',
    left: '38%',
    top: '60%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
  },
  imagetown2: {
    width: '90%',
    height: 150,
    opacity: 0.6,
    borderRadius: 5,
  },
  viewdetail: {color: '#fff', fontSize: 14},
});
