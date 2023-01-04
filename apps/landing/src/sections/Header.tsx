import styled from 'styled-components';

import { Item, Section } from '../components';
import { breakpoints } from '../helpers';

const StyledSection = styled(Section)`
  width: 100%;
  z-index: 10;
  justify-content: flex-start;
  gap: 2rem;

  img {
    height: 3.2rem;
    width: 4.3rem;
    object-fit: cover;
    object-position: left top;
  }

  ${Item} {
    flex-grow: 0;
  }

  ${breakpoints.desktop} {
    gap: 0;
    justify-content: center;

    img {
      width: auto;
    }

    ${Item} {
      flex-grow: 1;
      padding-right: 2rem;

      + ${Item} {
        border-left: 1px solid #afb4be;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  flex-direction: column;
  width: 100%;
`;

export const Header = () => (
  <Wrapper>
    <StyledSection alignItems="center" display="flex" paddingY={2}>
      <Item display="flex" justifyContent="flex-end">
        <a href="#" target="_blank">
          <img
            alt="Bigcommerce logo"
            src={`${import.meta.env.BASE_URL}assets/images/bc-logo.svg`}
          />
        </a>
      </Item>
      <Item display="flex" flexGrow={1} justifyContent="flex-start">
        <a href="#" target="_blank">
          <img
            alt="Stand with ukraine logo"
            src={`${import.meta.env.BASE_URL}assets/images/swu-logo.svg`}
          />
        </a>
      </Item>
    </StyledSection>
  </Wrapper>
);
