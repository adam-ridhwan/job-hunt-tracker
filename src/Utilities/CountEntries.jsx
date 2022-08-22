const CountEntries = ({ entries }) => {
  let count = 0;
  for (let i in entries) {
    count = count + 1;
  }
  return <p style={{ paddingLeft: '5px' }}>{count}</p>;
};

export default CountEntries;
