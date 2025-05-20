import './CSS/App.css';
import buildings from './data.js';
import Table from './components/Table.js';
//import CheckTitle from './components/PracticTask.js';

function App() {
  const Practic = [
    {"Заголовок_1": "Текст_1"},
    {"Заголовок_2": "Текст_2"},
    {"Заголовок_3": "Текст_3"}
  ];

  return (
    <div className="App">
       <h3>Самые высокие здания и сооружения</h3>
       <Table data={ buildings } amountRows="15" showPagination={true}/>
    </div>
    //<CheckTitle data={Practic} />
  );
}

export default App;
