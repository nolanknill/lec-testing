import './App.css';
import StoreList from './components/StoreList/StoreList';

function App() {
  const stores = [
    { id: 1, address: 'abc123' },
    { id: 2, address: 'def456' },
    { id: 3, address: 'ghi789' },
  ]

  return (
    <StoreList stores={stores} sale={true} loadData={()=> { }} />
  );
}

export default App;
