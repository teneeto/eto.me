import styled from 'styled-components';

export const StyledProjects = styled.section`
  scroll-snap-align: none;
  scroll-snap-stop: normal;
  height: auto;
  color: ${({ theme }) => theme.lightColor};
  margin-top: 5rem;

  & > div{
    width: 85%;
    margin: auto;
    margin-bottom: 2rem;
  }

  button{
    background: none;
    box-shadow: none;
    border: none;
    padding: 0;
    color: inherit;
    margin-right: 0.25rem;
    cursor: pointer;

    &:hover{
      transition: all 350ms ease-out;
    }
  }

  article{
    display: flex;
    width: 85%;
    margin: auto;
    margin-bottom: 8rem;
    & > div{
      border-radius: 10px;
      & > div {
        :nth-of-type(2){
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme.accentColor};
        }
      }
    }
  }

  .normal-exp{
    & > div{
      :first-child{
        position: relative;
        background-color: yellow;
        height: 26.5rem;
        min-width: 60%;
        background: #C9C9C9 0% 0% no-repeat padding-box;

        .pattern1{
          position: absolute;
          right: 0;
          margin-top: -1.5rem;
          margin-right: -1.25rem;
          height: 10rem;
          width: auto;
        }
      }

      :last-child{
        position: relative;
        display: grid;
        align-self: center;
        background-color: ${({ theme }) => theme.lightPrimaryColor};
        box-shadow: 6px 5px 20px #00000065;
        height: 16rem;
        width: calc(40% + 6rem);
        margin-left: -6rem;
        padding: 1rem;
        text-align: right;

        p{
          font-size: 0.8rem;
        }
        h3{
          font-size: 1.5rem;
        }
        & > div{
          :nth-of-type(1){
            color: ${({ theme }) => theme.lighterPrimaryColor};
            font-size: 0.7rem;

            ul{
              display: flex;
              justify-content: flex-end;
              list-style: none;
              li:not(:last-of-type){
                width: fit-content;
                margin-right:0.5rem;
              }
            }
          }

          :nth-of-type(2){
            display: flex;
            justify-content: flex-end;
            button{
              &:hover{
                transform: translateX(-0.5rem);
              }
            }
          }
        }
      }
    }
  }

  .flipped-exp{
    & > div{
      :first-child{
        position: relative;
        display: grid;
        align-self: center;
        background-color: ${({ theme }) => theme.lightPrimaryColor};
        box-shadow: 6px 5px 20px #00000065;
        height: 16rem;
        width: calc(40% + 6rem);
        margin-right: -6rem;
        padding: 1rem;
        z-index: 1;

        p{
          font-size: 0.8rem;
        }

        h3{
          font-size: 1.5rem;
        }

        & > div{
          :nth-of-type(1){
            color: ${({ theme }) => theme.lighterPrimaryColor};
            font-size: 0.7rem;

            ul{
              display: flex;
              list-style: none;
              padding: 0;
              li:not(:last-of-type){
                width: fit-content;
                margin-right:0.5rem;
              }
            }
          }

          :nth-of-type(2){
            width: fit-content;
            height: fit-content;
              &:hover{
                .arrow-right{
                  transform: translateX(0.5rem);
                  transition: all 350ms ease-out;
              }
            }
          }
        }
      }

      :last-child{
        position: relative;
        background-color: yellow;
        height: 26.5rem;
        min-width: 60%;
        background: #C9C9C9 0% 0% no-repeat padding-box;

        .pattern1{
          position: absolute;
          margin-top: -1.5rem;
          margin-left: -1.5rem;
          height: 10rem;
          width: auto;
        }
      }
    }
  }
`