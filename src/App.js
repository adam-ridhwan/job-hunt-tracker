import './App.css';
import { SearchProvider } from './Components/Contexts/SearchContext';
import SelectableBar from './Components/SelectableBar/SelectableBar-component';
import Table from './Components/Table/Table-component';
import jobInput from './Data';

const App = () => {
  return (
    <>
      <div className='heading'>
        {/* <h1 className='main-heading'>Job Hunt Tracker</h1> */}
        <h1 className='sub-heading'>Job Applications</h1>
      </div>
      <SearchProvider jobInput={jobInput}>
        <SelectableBar />
        <Table />
      </SearchProvider>
      <footer></footer>
    </>
  );
};

export default App;
