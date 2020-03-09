import React from 'react';
import SessionList from '../../components/SessionList';
import PropTypes from 'prop-types';
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
Schedule.propTypes = {
  allSessions: PropTypes.array,
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
};
export default Schedule;
