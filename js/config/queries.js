import {gql} from 'apollo-boost';

export const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      speaker {
        id
        image
        name
        bio
        url
      }
      startTime
      title
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

export const SINGLE_SESSION = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      id
      description
      location
      speaker {
        id
        image
        name
      }
      startTime
      title
    }
  }
`;

export const SINGLE_SPEAKER = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      id
      name
      image
      bio
      url
    }
  }
`;
