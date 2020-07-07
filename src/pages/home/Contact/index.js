import React from 'react';
import { StyledContact } from './styles';

export const Contact = () => {
  return (
    <StyledContact>
      <div>
        <h2>Get In Touch</h2>
        <p>
          You have a question, a deal for me or just want to say hi?
          go ahead my email is always open...
        </p>
        <form>
          <div>
            <label for='name'>Your Name</label>
            <input id='name' type='text' placeholder='Enter Your Name' />
          </div>

          <div>
            <label for='email' >Your Email Address</label>
            <input id='email' type='email' placeholder='Enter Your Email Address' />
          </div>

          <div>
            <textarea placeholder='Leave your message'></textarea>
          </div>

          <div>
            <input type='submit' id='submit' name='submit' />
          </div>
        </form>
      </div>
    </StyledContact>
  )
}