import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Container, Button, Heading, Flex, Input, Stack } from '@chakra-ui/react'


export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
    //   alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container height='70vh' maxW='md' color='white'>
      <Flex direction='column' background='gray.100' p={12} rounded={6}>
      <Stack spacing={4} direction='row' alignItems='center' justifyContent='center'>
        <Heading mb={6} color='teal'>Log In</Heading> 
        </Stack>
       
          <Input variant='filled' mb={3} color='black'
            type="email"
            placeholder="azx@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

     
        <Stack spacing={4} direction='row' alignItems='center' justifyContent='center'>
          <Button colorScheme='teal' alignItems='center' justifyContent='center'
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Sign Up'}</span>
          </Button>
          </Stack>
        </Flex>
    </Container>
  )
}





