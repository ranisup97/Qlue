import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {IconArrowLeft} from '../../assets'
const Report = (props) => {
  const [fileUri, SetFileuri] = React.useState();
  const [selectedUser, setSelectedUser] = React.useState({});
  const [photo, setPhoto] = React.useState('');

  const selectedItem = (data) => {
    setSelectedUser(data);
    console.log('selected', data);
    setPhoto(photo);
    setButton('Update');
    setModalVisible(true);
  };

  const uploadImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel || response.error) {
        // ketika image tidak di upload
        alert('you cancelled image picker');
      } else {
        const formData = new FormData();
        formData.append('images', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
      }
    });
  };

  return (
    <>
      <View style={styles.navbar}>
        <View style={{flexDirection:'row'}}>
          
        <IconArrowLeft width={20} height={20} style={{left: 10 ,top:5}}
        onPress={() => props.navigation.navigate('Home')}/>
        <Text
          style={{fontSize: 20, color: '#2395FF', left: 30, fontWeight:'bold'}}>
          Photo Report
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
            height: 400,
            borderRadius: 10,
            backgroundColor: '#fff',
          }}
          source={
            fileUri
              ? {uri: fileUri} // if clicked a new img
              : {uri: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'}
          } //else show random
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity style={styles.addPictureIcon} onPress={uploadImage}>
          <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>Take Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity style={styles.addPictureIcon2}
        
        onPress={() => props.navigation.navigate('WriteReport')}>
          <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Report;

const styles = StyleSheet.create({
  addPictureIcon: {
    height: 40,
    width: 90,
    backgroundColor: '#2395FF',
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  addPictureIcon2: {
    height: 40,
    width: 90,
    backgroundColor: '#2395FF',
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    marginTop:30
  },
  navbar: {
    backgroundColor: '#fff',
    padding: 20,
  },
});
