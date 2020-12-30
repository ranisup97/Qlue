import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Report = ({props}) => {
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
        <Text
          onPress={() => uploadImage()}
          style={{fontSize: 20, color: '#2395FF'}}>
          Photo Report
        </Text>
      </View>

      <View
        style={{
          alignSelf: 'center',
          marginTop: 35,
        }}>
        <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 10,
            backgroundColor: '#fff',
          }}
          source={
            fileUri
              ? {uri: fileUri} // if clicked a new img
              : {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}
          } //else show random
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.addPictureIcon} onPress={uploadImage}>
          <Text style={{color: '#fff', fontSize: 14}}>Select Photo</Text>
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
  navbar: {
    backgroundColor: '#fff',
    padding: 20,
  },
});
