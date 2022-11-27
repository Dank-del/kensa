import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ExamView from './components/ExamView';
import Exam from './Exam';
import SignUp from './Signup';

function App() {
  return (
    <>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<ExamView />} />
        <Route path="/exam/:id" element={<Exam itemsPerPage={1} />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
