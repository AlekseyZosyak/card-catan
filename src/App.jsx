import { Title } from './components/title/title';
import Navigation from './components/navigation/navigation';
import { button } from './components/navigation/button';
import Card from './components/card/card';

import './App.css';



function App() {
    return (
        <div className="body">
            <Title />
            <Navigation data={button}/>
            <Card cards={'science'}/>
        </div>
    );
}

export default App;
