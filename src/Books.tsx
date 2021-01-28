import './App.css';
import { Row, Container, Col } from 'react-bootstrap';

const Books: React.FC = () => {
  const numbers = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5'];
  const listItems = numbers.map((number) =>
    <Row>
      <Col xs={4} ><label>{number}</label></Col>
      <Col><i className="feather icon-edit"></i></Col>
      <Col lg={7} xs={6} md={9}><i className="feather icon-trash"></i></Col>
    </Row>);
  return (
    <Container>
      <Row >
        <Col xs={10}>
          {listItems}
        </Col>
      </Row>
      <Row>
        <Col ><i className="feather icon-plus" onClick={() => CreatBooks(true)}></i></Col>
        <Col lg={11} ><label> Add Boooks</label></Col>
      </Row>
    </Container>
  )
}

function CreatBooks(props: boolean): JSX.Element {
  if (props) {
    return (
      <Container className="CreatBook">
        <Row >
          <Col xs={10}>Create Books</Col>
        </Row>
        <Row>
          <Col lg={11} ><label> Add Boooks</label></Col>
        </Row>
      </Container>
    )
  }
  return (<Container />)
}
export default Books; 
