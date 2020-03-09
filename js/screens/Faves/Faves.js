import React from 'react';
import SessionList from '../../components/SessionList';
import PropTypes from 'prop-types';
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

Faves.propTypes = {
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
  allSessions: PropTypes.array,
};
export default Faves;
