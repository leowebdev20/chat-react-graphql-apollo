import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container } from "shards-react";

import Chat from "chat/Chat";

import "./index.css";

const App = () => (
    <Container>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex autem dolor recusandae, veritatis fuga repudiandae ipsam, sunt, accusantium fugiat quae quibusdam voluptatum aspernatur totam aut facilis eius voluptate blanditiis omnis necessitatibus molestiae quod deserunt iure dolorem. Illum, praesentium totam itaque vero, id velit modi et laboriosam odit dicta, explicabo minus?</p>
        <h1>Chat</h1>
        <Chat /> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit, fugit optio nemo dignissimos asperiores deserunt accusamus reiciendis dolores laboriosam vel quidem dolor culpa quasi atque? Maxime obcaecati dolorem aliquid amet quae? Facilis a quasi, delectus ut ad iusto natus?</p>
    </Container>
    )

ReactDOM.render(<App />, document.getElementById("app"));
