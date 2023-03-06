import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/Header';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Main />
      </ChakraProvider>
    </div>
  );
}

export default App;