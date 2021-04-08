import './App.css';
import {Component} from "react";
import {Container} from "semantic-ui-react";
import CardsContainer from "./Components/Cards/CardsContainer";
import FilterContainer from "./Components/Filter/FilterContainer";
import MenuContainer from "./Components/Menu/MenuContainer";

class App extends Component {

   render() {

      return (
         <div className="App">
            <Container>
               <MenuContainer />
               <FilterContainer />
               <CardsContainer />
            </Container>
         </div>
      );
   }
}


export default App;
