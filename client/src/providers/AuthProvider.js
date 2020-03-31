import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { admin: null, };

  handleRegister = (admin, history) => {
    axios.post("/api/auth", admin)
      .then( res => {
        this.setState({ admin: res.data.data, });
        history.push("/");
      })
    .catch( res => {
      console.log(res);
    })
  }
  
  handleLogin = (admin, history) => {
    axios.post("/api/auth/sign_in", admin)
      .then( res => {
        this.setState({ admin: res.data.data, });
        history.push("/");
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ admin: null, });
        history.push('/login');
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.admin !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setAdmin: (admin) => this.setState({ admin, }),
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};