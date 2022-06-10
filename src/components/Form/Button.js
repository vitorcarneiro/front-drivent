import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Button({ variant = 'contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
  background-color: ${(props) => props.isghbt && '#24292D !important'};
  color: ${(props) => props.isghbt && '#fff !important'};
`;
