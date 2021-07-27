import React, { Component } from "react";
import { URL_API } from "../../utils/constant";
import "./Login.scss";
import axios from "axios";
import swal from "sweetalert";

class LoginStudent extends Component {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  constructor(props) {
    super(props);
    this.state = {
      Login: {
        nim: "",
        password: "",
      },
    };
  }

  handlechange = (event) => {
    let loginData = { ...this.state.Login };
    loginData[event.target.name] = event.target.value;
    console.log(loginData);

    this.setState({
      Login: loginData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(URL_API + "loginStudent", this.state.Login)
      .then((res) => {
        swal({
          title: "Sukses Login",
          text: "Sukses Login, Helloo " + res.data.name + "!!",
          icon: "success",
          button: false,
          timer: 2500,
        });
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("nim", res.data.nim);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("majorId", res.data.major.id);
        localStorage.setItem("major", res.data.major.name);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("type", "student");
        this.props.history.push("/");
        window.location.reload("/");
      })
      .catch((error) => {
        const errorMessage = JSON.parse(error.request.response);
        swal({
          title: "Gagal Login",
          text: "Gagal Login " + errorMessage.message,
          icon: "error",
          button: false,
          timer: 2500,
        });
        this.props.history.push("/loginStudent");
      });
  };

  render() {
    return (
      <>
        <div className="Login">
          <div class="container">
            <div class="container--form container--login">
              <form onSubmit={this.handleSubmit} novalidate>
                <h1>Log in as Student</h1>
                <p>
                  Belum punya akun? <a href="/">Daftar</a>
                </p>

                {/* email field */}
                <div class="input-block email-block">
                  <input
                    type="text"
                    required
                    spellcheck="false"
                    placeholder="nim"
                    name="nim"
                    onChange={this.handlechange}
                    id="login-email"
                  />
                  <i class="fas fa-user icon"></i>
                </div>

                {/* password field */}
                <div class="input-block password-block">
                  <input
                    type="password"
                    required
                    spellcheck="false"
                    placeholder="password"
                    name="password"
                    onChange={this.handlechange}
                    id="login-password"
                  />
                  <i class="fas fa-key icon"></i>
                  {/* <div class="hide-reveal-button">
                <ion-icon name="eye-outline" class="hide"></ion-icon>
                <ion-icon name="eye-off-outline" class="reveal"></ion-icon>
              </div> */}
                </div>

                <div class="submit">
                  <button class="submit-button" type="submit">
                    Masuk
                  </button>
                  <a href="/" class="submit-link">
                    Lupa kata sandi?
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-login">
            © 2021, Sistem Informasi Akademik | create by Michael Septian &
            Yeremia Joy{" "}
          </div>
        </div>
      </>
    );
  }
}
export default LoginStudent;
