
import {useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';


const Saved =  () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetcher = async () => {
        const response = await fetch("/api/books")
        if (response.ok){
            const api = await response.json()
            setData(api)
        }else{
            console.log("err")
        } 
        }
        fetcher();
      }, []);

      const remove = (id) => {
        fetch("/api/books/" + id, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((res) => console.log("book deleted from db", res));
        setData(data.filter((data) => data._id !== id));
      }
    
    return(
        <div id = "Saved">
            <h3>Saved Books</h3>
               {data.length > 0 && (<div id = "saved-results">
                    <h3>Results</h3>
                        {data.map(name => {
                    return(
                        <div key = {name._id}>
                            <Container>
                                    <Row>
                                        <Col><h4>{name.title}</h4></Col>
                                        <Col><button><a href = {name.link}>View</a></button> <button onClick = {() => remove(name._id)}>Delete</button></Col>
                                    </Row>
                                </Container>
                                            <p id = "author">Authors {name.authors}</p>
                                <div key = {name.id}>
                                    <Container>
                                        <Row> 
                                            <Col><img src = {name.image } alt ={`${name.title} book`}/></Col>
                                            <Col><p id = "description">{name.description}</p></Col>
                                        </Row>
                                    </Container>
                                </div>
                        </div>)})}
                </div>)}
        </div>
    )
}

export default Saved;