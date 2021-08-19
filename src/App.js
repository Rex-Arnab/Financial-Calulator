import Bank from './components/Bank';
import General from './components/General';
import Header from './components/Header';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="h-max App p-3 text-white bg-gray-400 flex flex-col space-y-2 md:w-5/12 md:mx-auto md:mt-5">
      <Header />
      <Bank />
      <General />
      <Feedback />
    </div>
  );
}

export default App;
