import React from 'react';
import SessionList from '../../components/SessionList';
const Faves = ({navigation, faveIds, allSessions}) => {
  return (
    allSessions.length !== 0 && (
      <SessionList
        allSessions={allSessions}
        navigation={navigation}
        faveIds={faveIds}
      />
    )
  );
};

export default Faves;
