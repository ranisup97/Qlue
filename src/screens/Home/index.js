import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IconBell, IconMap, IconComment, IconDukung} from '../../assets';

const Content = (props) =>{
  return(
    <View>
          <View style={styles.town}>
            <View style={styles.townWidth}>
              <Image
                source={{uri: props.gambar}}
                style={styles.ImageTown1}
              />
              <Text style={styles.text1}>Current Informations around</Text>
              <Text style={styles.text2}>CIRIUNG</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.viewdetail}>View Detail</Text>
              </TouchableOpacity>
            </View>

             </View>
        </View>
  )
}

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
        <View style={{flexDirection:'row'}}>
        <Content gambar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV2xuNMONkAyR3pwkZiprwzIlispG79MqcA&usqp=CAU' />
        < Content gambar='https://1.bp.blogspot.com/-QgnMhiJYVTQ/XNd2dxA5jYI/AAAAAAAADY8/8-epUN2lDPM4Ahfy13HUuqxDpvkNTkdNQCLcBGAs/s640/arsitektur%2Bkota.jpg' />
        </View>

        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', left: 20}}>
            <Image
              source={{
                uri:
                  'https://i.pinimg.com/236x/f6/e4/df/f6e4dfc2834fafdc38caec39ed628748.jpg',
              }}
              style={{width: 40, height: 40, borderRadius: 40, right: 5}}
            />
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>qlugwe</Text>
              <View style={{flexDirection: 'row', top: 3}}>
                <IconMap width={10} height={10} />
                <Text style={{fontSize: 10, left: 5}}>Cipenjo</Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:10}}>
            <Image source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}} 
            style={{width: '100%', height: 300}} />
          </View>
          <View style={{flexDirection:'row', left: 10, top: 10}}>
            <IconDukung width={30} height={30} />
            
            <IconComment width={30} height={30} style={{left: 10}} />
          </View>
          <View style={{marginTop: 20, padding: 15}}>
            <Text>0 Support</Text>
            <Text style={{paddingTop:10}}>Simpang perumahan metland, bikin macet sampai taman buah mekar sari
              buatlah fly over atau under pas .biar gak mengganggu  dengan ...more
            </Text>
            
            <Text style={{paddingTop:10}}>CallCenter: Terimakasih atas Laporan Anda  melalui Qlue ,kami akan segera menanganinya</Text>
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
    backgroundColor: '#fff',
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
    opacity: 0.7,
    borderRadius: 5,
  },
  text1: {
    position: 'absolute',
    color: '#fff',
    fontSize: 18,
    paddingLeft: '20%',
    paddingTop: '10%',
  },
  text2: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    paddingLeft: '40%',
    paddingTop: '20%',
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
