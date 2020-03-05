import React, {Component} from 'react';
import About from './About';
import {Query} from 'react-apollo';
import {CODE_OF_CONDUCT} from '../../config/queries';
import Loader from '../../components/Loader';
class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={CODE_OF_CONDUCT}>
        {({loading, data}) => {
          if (loading) return <Loader />;
          if (data) return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
