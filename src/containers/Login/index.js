import React from "react";
import { AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { isSuccess } from "../../utils";


import Validator from "../../validator";

import Login from "../../views/Login";
import {
  getLogin
} from "../../actions/login";

class LoginContainer extends React.PureComponent {
  state = {
    data: {
      mobile: "",
      password: "",
      rememberMe: true
    },
    fetching: false,
    errors: {}
  };

  componentDidMount() {
    //this._getStorageValue();
  }

  async _getStorageValue() {

    let mobile = await AsyncStorage.getItem('mobile');
    let password = await AsyncStorage.getItem('password');

    let data = this.state.data;
    data.mobile = mobile;
    data.password = password;

    this.setState({
      data
    });
    this.forceUpdate()
  }
  /**
   * Validation Location
   *
   *  @param String field
   *
   *  @return Boolean
   */
  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        mobile: ["required"],
        password: ["required", "minLength|6"]
      },
      this.state.data,
      field
    );
    console.log("this.state.data==",this.state.data,"field===",field)
console.log("validate====",validate)
    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };


  /**
   * Input change handlers
   *
   */
  _handleChange = (name, value) => {
    const { data } = this.state;
    if (name === "rememberMe") {
      data[name] = !data[name];
    } else {
      data[name] = value;
    }

    this.setState(
      {
        data
      }
      //() => this._isValid(name)
    );
  };

  saveCredentials = async () => {
    const { data } = this.state;

    if (data.rememberMe) {
      await AsyncStorage.setItem('mobile', data.mobile);
      await AsyncStorage.setItem('password', data.password);
    } else {
      await AsyncStorage.setItem('mobile', "");
      await AsyncStorage.setItem('password', "");
    }

  }
  /**
   * On Login
   */
  _login = () => {
    console.log("call login", this.state.data)
    const valid = this._isValid();
    console.log("valid===", valid);

    const { data } = this.state;
    let strMobile = data.mobile.trim();
    let strPwd = data.password.trim();

    if(strMobile.length === 0 && strPwd.length === 0){
      alert('Please enter username and password.');
      
    }else if(strMobile.length === 0){
        alert('Please enter username.')
        
    }else if(strPwd.length === 0){
      alert('Please enter password.')
     
    } else if(strPwd.length < 6){
      alert('Please enter 6 digit password.')
     
    }
    else{
      if (valid) {
      this.setState({ fetching: true });
      const { data } = this.state;
      
      return this.props.getLogin(data).then(() => {
        console.log("this.props.login===",this.props.login.data.RESPONSECODE);
        
        if (isSuccess(this.props.login)) {
         if(this.props.login.data.RESPONSECODE>0){
          this.props.navigation.navigate("DrawerNavigator");
          this.setState({ fetching: false });
         }else{
          alert('Please check your username and password')
       }

        //  this.saveCredentials();
         // this._navigateToProfileview();
          //this._navigateToDashboard();
        }else{
           alert('Try Again ')
        }
      });
    }
   }
  };

  /**
   * Navigate to dashboard on login
   */
  _navigateToDashboard = () => {
    this.setState({ fetching: true }, () => {
      return this.props.userActions.fetchCartCount().then(() => {
        return this.props.notificationActions.fetchCount().then(() => {
          this.setState(
            {
              fetching: false
            },
            () => {
              return history.push("/");
            }
          );
        });
      });
    });
  };

  _navigateToForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  }
  _navigateToGetStartedView = () => {
    //this.props.navigation.navigate("SignupStep1");
    this.props.navigation.navigate("Signup");
  }
  _navigateToProfileview = () => {

     this.props.userActions.fetchCartCount().then(() => {
       this.props.notificationActions.fetchCount().then(()=>{
          this.props.navigation.navigate("Dashboard");
         // this.props.navigation.navigate("Profile");
         // this.props.navigation.navigate('MarketPlaceContainer', { slug: "" });
         //this.props.navigation.navigate("AccountSettings");
       });
     });
   // this.props.navigation.navigate("Profile");    
   
   // this.props.navigation.navigate("MarketPlaceContainer");
  //this.props.navigation.navigate("AccountSettings");
   // this.props.navigation.navigate("CreateService");
    // this.props.navigation.navigate("Login");
   // this.props.navigation.navigate("Plan");
  }
  // _navigateBack =()=>{
  //   this.props.navigation.goBack();

  // }
  render() {
    const { data, errors, fetching } = this.state;
    const { login } = this.props;

    return (
      <Login
        data={data}
        login={login}
        errors={errors}
        fetching={fetching}
        onSubmit={this._login}
        handleChange={this._handleChange}
        navigation={this.props.navigation}
        />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    getLogin: bindActionCreators(getLogin, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
