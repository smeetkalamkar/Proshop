import React,{useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Form,Button,Row,Col} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {useLocation} from "react-router-dom"
import Message from "../components/Message";
import Loader from "../components/Loader"
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';
const LoginScreen = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const location = useLocation();
    console.log(location)
    const redirect = location.search ? location.search.split('=')[1]:'';
    const dispatch  = useDispatch();
    const userLogin  = useSelector(state=>state.userLogin)
    const {loading,error,userInfo} = userLogin;
  

    const navigate = useNavigate()
    useEffect(()=>{
        if(userInfo){
            navigate(`/${redirect}`)
        }
    },[navigate,userInfo,redirect])
    
    const submitHandler  = (e)=>{
        e.preventDefault()
        //DISPATCH LOGIN
        dispatch(login(email,password))
    }


  return (
    <FormContainer>
         {error && <Message variant='danger'>{error}</Message>}
         {loading && <Loader/>}

        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
         <Form.Group  controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          >

          </Form.Control>
         </Form.Group>


         <Form.Group  controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          >
          </Form.Control>
         </Form.Group>
         <Button type='submit' variant='primary'>
            Sign In
         </Button>
        </Form>

        <Row className='py-3'>
        <Col>
        New Customer?{' '}
        <Link to={redirect ? `/register?redirect=${redirect}`:'/register'}>
        Register 
        </Link>
        </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen