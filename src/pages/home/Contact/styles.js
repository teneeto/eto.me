import styled from 'styled-components';

export const StyledContact = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.lightColor};
  

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28rem;
    
    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
      width: 50%;
    }

    h2{
      margin-bottom: 2rem;
      text-align: center;
    }

    p{
      text-align: center;
      margin-bottom: 2rem;
      padding: 0 2rem;
      color: ${({ theme }) => theme.accentColor};
    }

    form{
      width: 100%;
      font-size: 0.75rem;
      div{
        display: flex;
        flex-direction:column;
        margin-bottom: 1rem;
        
        label{
          color: ${({ theme }) => theme.greyColor};
        }
        input[type="text"],
        input[type="email"],
        input[type='submit'],
        textarea {
          padding: 0.8rem;
          border: 1px solid ${({ theme }) => theme.greyColor};
          color: ${({ theme }) => theme.lightColor};
          background-color: transparent;
          outline:none;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color:${({ theme }) => theme.accentColor};
        }

        textarea{
          height: 20vh;
        }
      }
    }
  }
`