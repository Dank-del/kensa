import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ExamView from './components/ExamView';
import QuestionPage from './QuestionPage';
import Exam from './Exam';

function App() {
  return (
    <>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<ExamView />} />
        <Route path="/exams/:id" element={<QuestionPage />} />
        <Route path="/exam/" element={<Exam itemsPerPage={1} />} />
      </Routes>
    </>
  );
}

export default App;
