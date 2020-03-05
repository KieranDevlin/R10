import React from 'react';
import ScheduleList from '../../components/ScheduleList';

const Schedule = ({allSessions, navigation, faveIds}) => {
  return (
    allSessions.length !== 0 && (
      <ScheduleList
        allSessions={allSessions}
        navigation={navigation}
        faveIds={faveIds}
      />
    )
  );
};

export default Schedule;
