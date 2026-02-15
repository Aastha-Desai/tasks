import React from "react";
import "./App.css";
import { Row, Col, Button} from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" >
                <h1>UD CISC275 with React Hooks and TypeScript</h1><br/>
                Aastha Desai<br/>
                Hello World 
            </header>
            <Row>
                <Col>
                    <p>
                        
                        <ul style={{}}>
                            <li>Pandas are fluffy</li>
                            <li>Pandas eat Bamboo</li>
                            <li>Pandas are my favorite animal</li>
                        </ul>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload.
                    </p>
                    <div style={{backgroundColor: "red", width: 50, height: 50, margin: "auto"}}></div>
                    
                </Col>
                <Col>
                    <img src="https://images.unsplash.com/photo-1703248187251-c897f32fe4ec?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGElMjBiZWFyfGVufDB8fDB8fHww" alt="Panda Image" width={190}/>
                </Col>
            </Row>
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
        </div>
    );
}

export default App;
