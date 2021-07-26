import React from 'react'
import './Login.scss'

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  return (
    <div className="Login">
      <div class="container">
        <div class="container--form container--login">
          <form action="#" novalidate>
            <h1>Log in</h1>
            <p>Belum punya akun? <a href="/">Daftar</a></p>

            {/* email field */}
            <div class="input-block email-block">
              <input type="text" required spellcheck="false" placeholder="username" name="email" id="login-email" />
              <i class="fas fa-user icon"></i>
              <p class="helper-text">this is helper text</p>
            </div>

            {/* password field */}
            <div class="input-block password-block">
              <input type="password" required spellcheck="false" placeholder="password" name="password" id="login-password" />
              <i class="fas fa-key icon"></i>
              <div class="hide-reveal-button">
                <ion-icon name="eye-outline" class="hide"></ion-icon>
                <ion-icon name="eye-off-outline" class="reveal"></ion-icon>
              </div>
              <p class="helper-text">this is helper text</p>
            </div>

            <div class="submit">
              <div class="submit-button">Masuk</div>
              <a href="#" class="submit-link">Lupa kata sandi?</a>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-login">© 2021, Sistem Informasi Akademik create by Michael Septian & Yeremia Joy </div>
    </div>
  );
}

export default Login;