import React, {Component} from 'react';
import {View, Image} from 'react-native';

const Logo = () => (
  <View style={{alignItems: 'center'}}>
    <Image
      source={{
        uri:
          'https://lh3.googleusercontent.com/proxy/zBhR2PbQCqxCSghjETzsRuamGGI2bTGmyHZRHYhaFPBqAEYwT8DShnm1eu4nSO8KOg-IN8Cm_nSYmp4zF3c54GdCV16VZ8fwhItKg5jLfFC5sulqaVxAHicyRSM9LmJR',
      }}
      style={{width: 100, height: 100}}
    />
    <Image
      source={{
        uri: 'https://www.dlf.pt/png/big/16/161066_instagram-font-png.png',
      }}
      style={{width: 300, height: 100, marginBottom: 30}}
    />
  </View>
);
export default Logo;
