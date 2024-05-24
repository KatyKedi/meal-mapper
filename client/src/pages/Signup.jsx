import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import {
  Box,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'

export default function Signup() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' })
  const [signup, { error }] = useMutation(ADD_USER);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const mutationResponse = await signup({
        variables: form,
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  }

  function formChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' bg='brand.800' onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor='firstName'>First Name</FormLabel>
        <Input
          id='firstName'
          placeholder='First Name'
          bg='brand.800'
          onChange={formChange}
        />
        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        <Input
          id='lastName'
          placeholder='Last Name'
          bg='brand.800'
          onChange={formChange}
        />
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          placeholder='email@example.com'
          bg='brand.800'
          onChange={formChange}
        />
        <FormLabel htmlFor='password'>Password</FormLabel>
        <InputGroup size='md'>
          <Input
            id='password'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            bg='brand.800'
            onChange={formChange}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        {error ? (
          <FormErrorMessage>The provided credentials are incorrect</FormErrorMessage>
        ) : null}
      </FormControl>
      <Button mt={4} colorScheme='teal' type='submit'>
        Submit
      </Button>
    </Box>
  )
}