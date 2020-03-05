import React from 'react';
import ScheduleList from '../../components/ScheduleList';

const Schedule = ({allSessions, navigation}) => {
  return (
    allSessions.length !== 0 && (
      <ScheduleList allSessions={allSessions} navigation={navigation} />
    )
  );
};

export default Schedule;
