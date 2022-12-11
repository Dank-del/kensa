import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ExamView from './components/ExamView';
import Exam from './Exam';
import SignUp from './Signup';
import Login from './Login';
import Footer from './components/Footer';
import Home from './Home';
import { CurrentUserProvider } from './CurrentUserContext';
import Profile from './Profile';
import CreateExam from './CreateExam';
import ExamViewPage from './ExamViewPage';
import AddQuestionPage from './AddQuestionPage';

function App() {
  return (
    <CurrentUserProvider>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exams" element={<ExamView />} />
        <Route path="/exam/:id" element={<Exam itemsPerPage={1} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createexam" element={<CreateExam/>}/>
        <Route path="/examview/:id" element={<ExamViewPage/>}/>
        <Route path="/addquestion/:id" element={<AddQuestionPage/>}/>
      </Routes>
      <Footer />
    </CurrentUserProvider>
  );
}

export default App;
