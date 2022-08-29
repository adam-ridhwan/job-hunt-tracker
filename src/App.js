import './App.css';

import SelectableBar from './Components/SelectableBar/SelectableBar';
import Table from './Components/Table/Table';

const App = () => {
  return (
    <>
      <div className='heading'>
        {/* <h1 className='main-heading'>Job Hunt Tracker</h1> */}
        <h1 className='sub-heading'>Job Applications</h1>
      </div>

      <SelectableBar />
      <Table />

      <footer></footer>
    </>
  );
};

export default App;
