import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from './components/header/Navigation';


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navigation />
      </ChakraProvider>
    </div>
  );
}

export default App;