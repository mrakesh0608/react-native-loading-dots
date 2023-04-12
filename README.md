<h1 align="center">Welcome to @mrakesh0608/react-native-loading-dots 👋</h1>
<p align='center'>A Loading Dots Component for React Native</p>
<p align='center'>
  <a href="https://www.npmjs.com/package/@mrakesh0608/react-native-loading-dots" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@mrakesh0608/react-native-loading-dots.svg">
  </a>
  <a href="https://github.com/mrakesh0608/react-native-loading-dots/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@mrakesh0608/react-native-loading-dots" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dt/@mrakesh0608/react-native-loading-dots">
  </a>
</p>

## Prerequisites - Peer Dependencies
* @types/react >= 18.0.0
* react >= 18.0.0 
* react-native >= 0.70.0
* typescript >= 4.9.0

## Install
```
npm i @mrakesh0608/react-native-loading-dots
```
## Usage
[Try on Expo Snack](https://snack.expo.dev/@mrakesh0608/react-native-loading-dots-)
```
import { View, Text, ScrollView } from 'react-native';
import { LoadingDots } from '@mrakesh0608/react-native-loading-dots';

const list = ['elastic', 'flashing', 'typing', 'ping', 'pulse'];

export default function App() {
  return (
    <ScrollView style={{ justifyContent: 'center', alignItems: 'center' }}>
      {list.map((item, index) => (
        <View
          key={index}
          style={{
            marginVertical: 12,
          }}>
          <LoadingDots
            animation={item}
            containerStyle={{
              backgroundColor: 'lightgray',
              padding: 18, 
              borderRadius: 10,
            }}
          />
          <Text style={{ textAlign: 'center' }}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
```

## Author
<div style="display:flex;align-items: center;">
    <img src='https://avatars.githubusercontent.com/u/101246871?v=sd4' alt = '👤' width='16px' height='16px'>
    <b style='margin-left:10px;'>Merugu Rakesh</b>
</div>

* Website: [mrakesh.vercel.app](https://mrakesh.vercel.app)
* Github: [@mrakesh0608](https://github.com/mrakesh0608)
* LinkedIn: [@mrakesh0608](https://linkedin.com/in/mrakesh0608)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/mrakesh0608/react-native-loading-dots/issues). You can also take a look at the [contributing guide](https://github.com/mrakesh0608/react-native-loading-dots/blob/master/CONTRIBUTING.md).

## 💖 Show your support
Give a ⭐️ if this project helped you!

## 📝 License
Copyright © 2023 [Merugu Rakesh](https://github.com/mrakesh0608).<br />
This project is [MIT](https://github.com/mrakesh0608/react-native-loading-dots/blob/master/LICENSE) licensed.
