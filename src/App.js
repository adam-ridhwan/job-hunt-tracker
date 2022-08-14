import './App.css';
import SelectableBar from './Components/SelectableBar/SelectableBar';
import Table from './Components/Table/Table';

function App() {
  return (
    <>
      <div className='body'>
        <h1 className='main-heading'>Job Hunt Tracker</h1>
        <h2 className='sub-heading'>Job Applications</h2>
      </div>
      <SelectableBar />
      <Table />
      <footer></footer>
    </>
  );
}

export default App;
