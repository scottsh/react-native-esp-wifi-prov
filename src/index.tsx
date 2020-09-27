import { NativeModules } from 'react-native';

type EspWifiProvType = {
  multiply(a: number, b: number): Promise<number>;
};

const { EspWifiProv } = NativeModules;

export default EspWifiProv as EspWifiProvType;
