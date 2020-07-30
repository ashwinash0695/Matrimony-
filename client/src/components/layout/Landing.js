// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Landing extends Component {
//   render() {
//     return (
//       <div style={{ height: "75vh" }} className="container valign-wrapper">
//         <div className="row">
//           <div className="col s12 center-align">
//             <div className="col s6">
//               <Link
//                 to="/register"
//                 style={{
//                   width: "140px",
//                   borderRadius: "3px",
//                   letterSpacing: "1.5px"
//                 }}
//                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//               >
//                 Register
//               </Link>
//             </div>
//             <div className="col s6">
//               <Link
//                 to="/login"
//                 style={{
//                   width: "140px",
//                   borderRadius: "3px",
//                   letterSpacing: "1.5px"
//                 }}
//                 className="btn btn-large btn-flat waves-effect white black-text"
//               >
//                 Log In
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Landing;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./landingpage.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };


  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <div className="landingContainer">
          <h2>Young Matrimony</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={require('../../components/wedd.svg')} />
            <div className="formContainer">
              <h3>Login.</h3>
              <form noValidate onSubmit={this.onSubmit}>
                <input type="text"
                  onChange={this.onChange}
                  value={this.state.email}
                  // error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                {/* <label htmlFor="email">Email</label> */}
                <span className="red-text">
                  {/* {errors.email} */}
                  {/* {errors.emailnotfound} */}
                </span>
                <br />
                <input type="text"
                  onChange={this.onChange}
                  value={this.state.password}
                  // error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                {/* <label htmlFor="password">Password</label> */}
                <span className="red-text">
                  {/* {errors.password}
                  {errors.passwordincorrect} */}
                </span>
                <br />
                {/* <span><input style={{marginLeft:"20px"}} type="checkbox" /><span>Terms & condition</span></span> */}

                <button type="submit">Login</button>
                <h3 style={{ fontSize: "12px" }}>Don't have an account?<Link to="register"> <button>register</button></Link></h3>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
Landing.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Landing);
