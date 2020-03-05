import React from 'react';
import SessionList from '../../components/SessionList';
const Faves = ({navigation, faveIds, allSessions}) => {
  // console.log(
  //   allSessions.map(data => {
  //     console.log(data);
  //     // data.filter(session => {
  //     //   faveIds.inculdes(session.id) && session;
  //     // });
  //   }),
  // );
  return (
    allSessions.length !== 0 && (
      <SessionList
        allSessions={allSessions}
        navigation={navigation}
        faveIds={faveIds}
      />
    )
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text>I am faves screen</Text>
    //   <TouchableOpacity
    //     onPress={() => {
    //       navigation.navigate('Session');
    //     }}>
    //     <Text>Go to session</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default Faves;
