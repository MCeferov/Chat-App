// Components
import Container from "./Components/Container";

// Pages
import Home from "./Pages/Home";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";

// Router
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
    </Container>
  );
};

export default App;
