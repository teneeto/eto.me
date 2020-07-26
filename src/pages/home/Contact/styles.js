import styled from 'styled-components';

export const StyledContact = styled.section`
  display: flex;
  color: ${({ theme }) => theme.lightColor};

  & > div {
    display: flex;
    flex-direction: column;
    max-width: 28rem;
    margin: auto;
    

    h2{
      margin-bottom: 0.5rem;
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
      div{
        display: flex;
        flex-direction:column;
        margin-bottom: 1rem;
        
        label{
          color: ${({ theme }) => theme.greyColor};
          font-size: ${({ theme }) => theme.fsSmText};
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
        input[type="submit"]{
          &:hover{
            :hover{
              box-shadow: none;
              border: 1px solid ${({ theme }) => theme.accentColor};
              color: ${({ theme }) => theme.accentColor};
              transition: all 300ms linear;
      }
          }
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color:${({ theme }) => theme.accentColor};
        }

        textarea{
          min-height: 20vh;
        }
      }
    }
  }
`