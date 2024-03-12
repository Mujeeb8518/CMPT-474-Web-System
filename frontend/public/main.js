// Define components for each page (Register, Login, Posts)
const Register = () => <h2>Registration Form Goes Here</h2>;
const Login = () => <h2>Login Form Goes Here</h2>;
const Posts = () => <h2>Posts List Goes Here</h2>;

// Router component to handle navigation
const Router = () => {
  const path = window.location.pathname;

  switch (path) {
    case '/register':
      return <Register />;
    case '/login':
      return <Login />;
    case '/posts':
      return <Posts />;
    default:
      return <h2>Home</h2>;
  }
};

// Render the Router component
ReactDOM.render(<Router />, document.getElementById('root'));