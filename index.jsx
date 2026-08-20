import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"
import Star from "./components/Star"
import Menu from "./components/Menu"
import { BsLightningChargeFill } from "react-icons/bs"
import testImage from "./imgs/Image.jpg"

export default function App() {
      
  return (
    <>
      <Star/>
      <br />
      <Menu>
        <Menu.Button variant="success">Options</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Account settings</Menu.Item>
          <Menu.Item>Support</Menu.Item>
          <Menu.Item>License</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <br />
      <Badge variant="gray" shape="square">Badge</Badge>
      <br />
      <Badge variant="blue" shape="square">Badge</Badge>
      <br />
      <Badge variant="red" shape="square">Offline</Badge>
      <br />
      <Badge variant="green" shape="square">Online</Badge>
      <br />
      <Badge variant="indigo" shape="pill">Badge</Badge>
      <br />
      <Banner variant="success">
        <Banner.Title>Success</Banner.Title>
      </Banner>
      <br />
      <Banner variant="warning">
        <Banner.Title>Warning</Banner.Title>
        <Banner.Text>Please review the details before continuing.</Banner.Text>
      </Banner>
      <br />
      <Banner variant="neutral">
        <Banner.Title>Update available</Banner.Title>
        <Banner.Text>This is a neutral informational message.</Banner.Text>
      </Banner>
      <br />
      <Banner variant="danger">
        <Banner.Title>There is a problem with your application</Banner.Title>
        <Banner.Text>Something went wrong and needs attention.</Banner.Text>
      </Banner>
      <br />
      <Card>
        <Card.Icon>
          <BsLightningChargeFill />
        </Card.Icon>
        <Card.Title>Fast setup</Card.Title>
        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
      </Card>
      <br />
      <br />
      <Card>
        <Card.Icon className="deployment-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 16C4.79086 16 3 14.2091 3 12C3 10.0929 4.33457 8.4976 6.12071 8.09695C6.04169 7.74395 6 7.37684 6 7C6 4.23858 8.23858 2 11 2C13.4193 2 15.4373 3.71825 15.9002 6.00098C15.9334 6.00033 15.9666 6 16 6C18.7614 6 21 8.23858 21 11C21 13.419 19.2822 15.4367 17 15.9M9 13L12 10L15 13M12 10L12 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Card.Icon>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
      </Card>
      <br />
      <Testimonial>
        <Testimonial.Image src={testImage} alt="May Andersons" />
        <Testimonial.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </Testimonial.Text>
        <Testimonial.Author author={{ name: "May Andersons", title: "Workcation, CTO" }} />
      </Testimonial>
      <Testimonial style={{ backgroundColor: "#2545B8"}}>
        <Testimonial.Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="Sarah Wilson"  />
        <Testimonial.Text style={{ color: "#fff" }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </Testimonial.Text>
        <Testimonial.Author  author={{ name: "Sarah Wilson", title: "UX Designer" }} style={{ color: "#fff" }} />
      </Testimonial>
      <Testimonial style={{ backgroundColor: "#fff"}}>
        <Testimonial.Text className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </Testimonial.Text>
        <Testimonial.Author  author={{ name: "Sarah Wilson", title: "UX Designer" }} />
      </Testimonial>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
