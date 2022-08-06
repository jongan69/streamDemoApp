import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function RegisterWebAuth({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        

      

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Please Mint our developer NFT for Authentication
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleMint} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Mint NFT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleMint() {
  WebBrowser.openBrowserAsync(
    'https://cryptocurrensea-dev-mint.vercel.app/'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
