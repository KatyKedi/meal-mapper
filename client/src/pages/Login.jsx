import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'

export default function Login() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: form.email, password: form.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  }

  function formChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
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
    </form>
  )
}