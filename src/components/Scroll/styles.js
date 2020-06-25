import styled from 'styled-components';

export const StyledScroll = styled.div`
  position: fixed;
  top: 45%;
  right: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 2rem;
  height: 8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 1rem 0 0;
  z-index: 999;

  &:focus {
    outline: none;
  }

  div {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.75rem;
    /* background: ${({ theme, open }) => open ? theme.primaryColor : theme.lightColor}; */
    border: 2px solid ${({ theme, open, visible }) => visible.home || visible.footer || open ? theme.lightColor : theme.primaryColor};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    &:hover{
      background: ${({ theme, visible }) => visible.home || visible.footer ? theme.lightColor : theme.primaryColor};
      transition: all 0.3s linear;
    }
  }
  
    .pitchslate {
      height: ${({ visible }) => visible.home ? '2.25rem' : '0.75rem'};
      background: ${({ theme, visible }) => visible.home ? theme.lightColor : 'transparent'};
    }

    .projects{
      height: ${({ visible }) => visible.projects ? '2.25rem' : '0.75rem'};
      background: ${({ theme, visible }) => visible.projects ? theme.primaryColor : 'transparent'};
    }

    .about {
      height: ${({ visible }) => visible.about ? '2.25rem' : '0.75rem'};
      background: ${({ theme, visible }) => visible.about ? theme.primaryColor : 'transparent'};
    }
    .contact{
      height: ${({ visible }) => visible.contact ? '2.25rem' : '0.75rem'};
      background: ${({ theme, visible }) => visible.contact ? theme.primaryColor : 'transparent'};
    }
    .footer {
      height: ${({ visible }) => visible.footer ? '2.25rem' : '0.75rem'};
      background: ${({ theme, visible }) => visible.footer ? theme.lightColor : 'transparent'};
    }
`