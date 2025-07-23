import "./App.css";
import cLogo from "./assets/logo.png";

function App(props) {
  return (
    <>
      <header>
        <img src={cLogo} className="logo" alt="Class Logo" />
        <h1>Hello {props.subject}, have you met {props.name}?</h1>
        <h2> Login to Get Started </h2>
                <form>
               <div class="wrap-input100" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="EMAIL" />
						
						
					</div>
				<div class="wrap-input100" data-validate="Password is required">
						<input class="input100" type="password" name="pass" placeholder="PASSWORD" />
						
						
					</div>
        
                <p class="button">
                    <input type="submit" name="button" id="button" value="Login" />
                </p>
	</form>  
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}

export default App;
