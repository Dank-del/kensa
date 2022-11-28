import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ExamView from './components/ExamView';
import Exam from './Exam';
import SignUp from './Signup';
import Login from './Login';
import Footer from './components/Footer';
import Home from './Home';

function App() {
  return (
    <>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exams" element={<ExamView />} />
        <Route path="/exam/:id" element={<Exam itemsPerPage={1} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
