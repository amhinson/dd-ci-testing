import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  DdSdkReactNative,
  DdSdkReactNativeConfiguration,
} from '@datadog/mobile-react-native';
import {DD_APP_ID, DD_ENV, DD_TOKEN} from './config';

const config = new DdSdkReactNativeConfiguration(
  DD_TOKEN,
  DD_ENV,
  DD_APP_ID,
  true, // track user interactions (such as a tap on buttons).
  true, // track XHR resources
  true, // track errors
);
config.site = 'US1';
// Optional: Enable or disable native crash reports
config.nativeCrashReportEnabled = true;
// Optional: Sample RUM sessions (in this example, 80% of session are sent to Datadog. Default is 100%)
config.sessionSamplingRate = 100;
// Optional: Sample tracing integrations for network calls between your app and your backend (in this example, 80% of calls to your instrumented backend are linked from the RUM view to the APM view. Default is 20%)
// You need to specify the hosts of your backends to enable tracing with these backends
config.resourceTracingSamplingRate = 100;

await DdSdkReactNative.initialize(config);

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
