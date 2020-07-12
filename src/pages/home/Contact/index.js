import React from 'react';
import { StyledContact } from './styles';

export const Contact = () => {
  return (
    <StyledContact>
      <div>
        <h2>Send a Message</h2>
        <p>
          You have a question, a deal for me or just want to say hi?
          go ahead.
        </p>
        <form>
          <div>
            <label htmlFor='name'>Your Name</label>
            <input id='name' type='text' placeholder='Enter Your Name' />
          </div>

          <div>
            <label htmlFor='email' >Your Email Address</label>
            <input id='email' type='email' placeholder='Enter Your Email Address' />
          </div>

          <div>
            <label htmlFor='message' >Your Message</label>
            <textarea id='message' name='message' placeholder='Leave your message here...'></textarea>
          </div>

          <div>
            <input type='submit' id='submit' name='submit' />
          </div>
        </form>
      </div>
    </StyledContact>
  )
}