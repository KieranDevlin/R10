import {gql} from 'apollo-boost';

export const ALL_SESSIONS_MAIN = gql`
  {
    allSessions {
      id
      title
      startTime
      location
    }
  }
`;

export const CODE_OF_CONDUCT = gql`
  {
    allConducts {
      id
      description
      title
      order
    }
  }
`;
