import {default as data} from './data'
import Question from './Components/Question';

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <h3>Questions and Answers About Login</h3>
          <div className="questions">
            {data.map( (question) => <Question {...question} key = {question.id}/>)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
