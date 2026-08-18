import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge"

export default function App() {
      
  return (
    <>
      <Badge variant="gray" shape="square">Badge</Badge>
      <br />
      <Badge variant="blue" shape="square">Badge</Badge>
      <br />
      <Badge variant="green" shape="square">Badge</Badge>
      <br />
      <Badge variant="yellow" shape="pill">Badge</Badge>
      <br />
      <Badge variant="red" shape="square">Badge</Badge>
      <br />
      <Badge>Badge</Badge>
      <br />
      <Badge variant="pink" shape="square">Badge</Badge>
      <br />
      <Badge variant="indigo" shape="pill">Badge</Badge>
      <br />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
