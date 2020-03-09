import AsyncStorage from '@react-native-community/async-storage';

export const addFaveSession = async faveId => {
  try {
    await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, faved_on: new Date()}),
    );
  } catch (e) {
    throw e;
  }
};

export const removeFaveSession = async faveId => {
  try {
    return await AsyncStorage.removeItem(`${faveId}`);
  } catch (e) {
    throw e;
  }
};

export const getAllFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const results = await AsyncStorage.multiGet(keys);
    return results.filter(store => store[1].includes('faved_on'));
  } catch (e) {
    throw e;
  }
};
