
import GeneralInfo from './components/general';
import EducationalExperience from './components/edu';
import PracticalExperience from './components/exp';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;
