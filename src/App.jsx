import { Title } from './components/title/titla';
import Navigation from './components/navigation/navigation';
import { button } from './components/navigation/button';
import './App.css';



function App() {
    return (
        <div className="body">
            <Title />
            <Navigation data={button}/>
        </div>
    );
}

export default App;
