import React from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import RecipeList from './Components/RecipeList';
import './App.css';

function App() {

  const [input, setInput] = React.useState("")
  const [query, setQuery] = React.useState("banana")
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState(false);

  const headers= { 'X-Api-Key': 'nJr8sIea2NqSpSAXROGZJA==y0h41yAaf80ZzHIV'}

  const getRecipe = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.api-ninjas.com/v1/recipe?query=' + query, {
        headers: headers
      });
      const data =  await response.json();
      setLoading(false)
      setResults(data);
    } catch(err) {
      setError(true);
    }
  }

  React.useEffect(() => {
    getRecipe();
    },[query])

  if(error) {
    return <div><b>Error Loading..</b></div>
  }

  return (
    <div className='app-container'>
      <Header />  
      <SearchBar
        input = {input}
        setInput = {setInput}
        setQuery = {setQuery}
      />
      <RecipeList 
        results = {results}
        loading = {loading}
      />
    </div>
  );
}

export default App;
