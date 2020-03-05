import React from 'react';
import SessionList from '../../components/SessionList';

const Schedule = ({allSessions, navigation, faveIds}) => {
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

export default Schedule;
