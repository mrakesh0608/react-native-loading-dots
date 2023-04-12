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
<div align='right'>
  <a href="https://snack.expo.dev/@mrakesh0608/react-native-loading-dots-" target="_blank">
    <span>Try this example on Expo Snack</span>
    <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 96 960 960" width="12" fill="currentColor" ><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z"/></svg>
  </a>
</div>

```
import { View, Text, ScrollView } from 'react-native';
import { LoadingDots } from '@mrakesh0608/react-native-loading-dots';

const list = ['elastic', 'flashing', 'pulse', 'ping', 'typing'];

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

## Styling Options

A list of available props to pass into the `<LoadingDots />` component:

| Props          | Type   | Default | Units | Description                                                                         |
| -------------- | ------ | ------- | ----- | ----------------------------------------------------------------------------------- |
| animation      | String | 'pulse' |   -   | Animation style :  `elastic`, `flashing`, `ping`, `pulse`, `typing`                 |
| color          | String | 'black' |   -   | Color of dots                                                                       |
| containerStyle | Style  |    -    |   -   | Container Style for Loading Dots top level component                                |
| dots           | Number |    3    |   -   | Number of dots to be displayed                                                      |
| delay          | Number |   280   |  ms   | Delay between the two dots                                                          |
| size           | Number |   10    |  px   | Size of dots                                                                        |
| spacing        | Number |    2    |  px   | Space between dots                                                                  |

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