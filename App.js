import React from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <WebView
      style={{flex: 1}}
      source={{
        uri:
          'https://okwast.github.io/react-native-webview-localstorage-issue-showcase/index.html',
      }}
      incognito={true}
      scalesPageToFit
    />
  </SafeAreaView>
);

export default App;
