import React ,{ useState ,useEffect} from 'react';
import { Container , Row , Col } from 'reactstrap';
import {Products } from '../components/Products';
import Detail from '../components/Detail';
import '../components/Menu.css';

const Fetch =()=>
{
  const [Products,setProducts] = useState([])

  const fetchData =() =>
  {
    fetch ("https://jsonplaceholder.serverapi.com/Product")
    .then (response =>
      {
        return response.json()
      })
      .then (data =>
        {
          setProducts(data)
        })
  }
   useEffect (()=>
   {
    fetchData()
   },[])

  
   return (
    <Container>
    
      <h1 className='header'>~BIG SALE...</h1>
    
        <Row>
        
        {
          Products.map((item)=>
           (
            <Col lg='3' key ={item.id} className='mb-4'>{''}
            <Detail item={item}/>
            </Col>
           ))
        }

        </Row>
    </Container>
  )
}

export default Fetch 