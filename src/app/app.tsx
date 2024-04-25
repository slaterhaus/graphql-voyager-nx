import {Voyager, voyagerIntrospectionQuery} from "graphql-voyager";
import {useEffect, useState} from "react";
import {example} from "./example";


export function App() {
  const [introspection, setIntrospection] = useState(null);
  useEffect(() => {
    if (introspection) return;
    const response = fetch(
      'https://swapi-graphql.netlify.app/.netlify/functions/index',
      {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: voyagerIntrospectionQuery }),
        credentials: 'omit',
      },
    ).then(response => response.json()).then(data => {
      setIntrospection(data)
    })
  }, [introspection])

  return (
    <div>
      {introspection && (
        <div style={{height: '100vh'}}>
          <Voyager introspection={introspection}/>
        </div>
      )}
    </div>
  );
}

export default App;
