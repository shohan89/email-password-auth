import logo from './logo.svg';
import './App.css';

function App() {
  const handleRegistration = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( email, password );
  }
  return (
    <div className="App">
      <form onSubmit={ handleRegistration }>
        <input type="email" name="email" id="" placeholder='Enter your Email'/>
        <br />
        <input type="password" name="password" id="" placeholder='Enter Your Password'/>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
