import React from 'react';
import axios from 'axios';
import { AuthConsumer, } from "../providers/AuthProvider";

class FetchAdmin extends React.Component {
  state = { loaded: false, };

  componentDidMount() {
    const { auth: { authenticated, setAdmin, }, } = this.props;

    if (authenticated) {
      this.loaded();
    } else {
      if (this.checkLocalToken()) {
        axios.get('/api/auth/validate_token')
          .then( res => {
            setAdmin(res.data.data);
            this.loaded();
          })
          .catch( res => {
            this.loaded();
          })
      } else {
        this.loaded();
      }
    }
  }

  checkLocalToken = () => {
    const token = localStorage.getItem('access-token');
    return token;
  }

  loaded = () => this.setState({ loaded: true, });

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

const ConnectedFetchAdmin = (props) => (
  <AuthConsumer>
    { auth => 
      <FetchAdmin { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedFetchAdmin;