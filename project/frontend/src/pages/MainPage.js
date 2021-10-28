import './MainPage.css';
import ProductList from '../components/ProductList';

function MainPage() {

  // state = {
  //   modal: true
  // };

  // selectModal = info => {
  //   this.setState({ modal: !this.state.modal }); // true/false toggle
  // };
    // const [initialData, setInitialData] = this.useState([{}]);

    // useEffect(()=> {
    //     fetch("/").then(response => response.json).then(data => setInitialData(data))
    // }, []);
    return (
      <div className="App"> 
        <ProductList />
      </div>
    );
  
}

export default MainPage;
