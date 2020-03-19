import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(0px, calc(100vw - 1200px)) minmax(0px, 1200px) minmax(0px, calc(100vw - 1200px));
  grid-auto-rows: minmax(min-content, max-content);
`

export default Layout;