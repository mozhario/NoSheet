
export const NativeStorage = {
    async getItem(key) {
        const AsyncStorage = require('@react-native-async-storage/async-storage').default;
        const data = await AsyncStorage.getItem(key);
        return data ? decryptData(data) : null;
    },
    async setItem(key, value) {
        const AsyncStorage = require('@react-native-async-storage/async-storage').default;
        const data = encryptData(value);
        await AsyncStorage.setItem(key, data);
    },
  };
