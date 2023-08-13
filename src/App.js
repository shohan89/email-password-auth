import logo from './logo.svg';
import './App.css';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';

function App() {
  const handleRegistration = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( email, password );
  }
  return (
    <div className="">
      <RegisterReactBootstrap />
    </div>
  );
}

export default App;
