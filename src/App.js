import "./App.css";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./components/Home";
import CardBuilder from "./components/CardBuilder";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import { UserProvider } from "./contexts/UserContext";
import AuthChecker from "./components/AuthChecker";
import AccountInfo from "./components/AccountInfo";
import SentCards from "./components/SentCards";
import Billing from "./components/Billing";
import ProfileCardView from "./components/ProfileCardView";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderFooter />}>
              <Route index element={<Home />} />
              <Route
                path="card-builder"
                element={
                  <AuthChecker>
                    <CardBuilder />
                  </AuthChecker>
                }
              />
              <Route
                path="profile/:userId"
                element={
                  <AuthChecker>
                    <Profile />
                  </AuthChecker>
                }
              />
              <Route path="sent-cards/:cardId" element={<ProfileCardView />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
