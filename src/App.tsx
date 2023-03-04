import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    </div>
  );
}

export default App;