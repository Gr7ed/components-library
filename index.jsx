import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner"

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
      <Banner type="success">
        <Banner.Title>Success</Banner.Title>
      </Banner>
      <br />
      <Banner type="warning">
        <Banner.Title>Warning</Banner.Title>
        <Banner.Text>Please review the details before continuing.</Banner.Text>
      </Banner>
      <br />
      <Banner type="neutral">
        <Banner.Title>Note</Banner.Title>
        <Banner.Text>This is a neutral informational message.</Banner.Text>
      </Banner>
      <br />
      <Banner type="danger">
        <Banner.Title>Danger</Banner.Title>
        <Banner.Text>Something went wrong and needs attention.</Banner.Text>
      </Banner>
      <br />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
