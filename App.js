import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image style={styles.menu} source = {require("./assets/Icons/menu_light.png")}/>
        <Text style={{fontFamily: 'Sydney', fontSize: 35, fontWeight: 'bold'}}>ensom</Text> 
        <Image style = {styles.sun} source = {require("./assets/Icons/sun.png")}/>
      </View>

      <View style={styles.profile}>
        <Image style={styles.picture} source={require("./assets/Profiles/mtl.jpg")}/> 
        <Text style ={styles.name}>MTL</Text>
        <Text style ={styles.distance}>2 miles away</Text>
      </View>

      <View style={styles.audio}>
        <Image style={styles.play} source={require("./assets/Icons/player_light.png")}/>
        <Image style={styles.wavelength} source={require("./assets/Icons/audio_waveform_light.png")}/>
        <Text style ={styles.music}>My hottest take</Text>
        

      </View>

      <View style={styles.bottom}>
      <Image style={styles.icons} source={require("./assets/Icons/discover_light.png")}/>
      <Image style={styles.icons} source={require("./assets/Icons/heart_light.png")}/>
      <Image style={styles.icons} source={require("./assets/Icons/messages_light.png")}/>
      <Text style ={styles.discover}>Discover</Text>
      <Text style ={styles.matches}>Matches</Text>
      <Text style ={styles.dms}>DMs</Text>

      </View>

    </SafeAreaView>
      
     


  );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `linen`,
  },

  navbar: {
    flex: 0.05,
    flexDirection: 'row',
    backgroundColor: 'linen',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },

  menu: {
    alignSelf: 'flex-start',
    backgroundColor: 'linen',
    borderRadius: 20,
    padding: 10,
    marginBottom: 5,
    resizeMode: 'contain',
    height: '100%',
    width: '20%',
  },

  sun: {
    alignSelf: 'flex-end',
    backgroundColor: 'linen',
    borderRadius: 20,
    padding: 10,
    marginBottom: 5,
    resizeMode: 'contain',
    height: '100%',
    width: '20%',
  },

  profile: {
    flex: 0.60,
    backgroundColor: 'linen',
    justifyContent: 'center',
    padding: 10,
    margin:10,

  },
  
  picture:{
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'linen',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
 },

 name:{
  fontFamily: 'Sydney', 
  fontSize: 28, 
  color: '#ffffff',
  position: 'absolute',
  top: '2%',
  left: '5%',
 },


 distance:{
  fontFamily: 'Sydney', 
  fontSize: 28, 
  color: '#ffffff',
  position: 'absolute',
  bottom: '2%',
  left: '5%',
 },


 audio:{
  flex: 0.25,
  flexDirection: 'row',
  backgroundColor: 'white',
  borderRadius: 20,
  padding: -10,
  margin: 30,
  justifyContent: 'space-between',
  shadowColor: '#303838',
  shadowOffset: { width: 0, height: 5 },
  shadowRadius: 10,
  shadowOpacity: 0.35,
 },

 music:{
  fontFamily: 'Sydney', 
  fontSize: 28, 
  color: '#000000',
  position: 'absolute',
  top: '2%',
  left: '5%',
 },

 wavelength: {
  alignSelf: 'center',
  resizeMode: 'contain',
  width: '60%',
  height: '50%',
 },

 play: {
  height: '50%',
  alignSelf: 'center',
  resizeMode: 'contain',
  width: '40%',
 },

 songs:{
  flexDirection: 'column',
  alignSelf: 'flex-start',

 },

bottom: {
  flex: 0.15,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'black',
  justifyContent: 'space-evenly',

},

icons: {
  height: '50%',
  width: '25%',
  resizeMode: 'contain',
},

discover: {
  fontFamily: 'Sydney', 
  fontSize: 18, 
  color: '#ffffff',
  position: 'absolute',
  bottom: '2%',
  left: '12%',
},

matches: {
  fontFamily: 'Sydney', 
  fontSize: 18, 
  color: '#ffffff',
  position: 'absolute',
  bottom: '2%',
  left: '43%',
},

dms: {
  fontFamily: 'Sydney', 
  fontSize: 18, 
  color: '#ffffff',
  position: 'absolute',
  bottom: '2%',
  left: '78%',

},

});
