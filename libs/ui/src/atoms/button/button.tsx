import { styled, Button as MuiButton, ButtonProps } from "@mui/material";

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({}));

export function Button(props: ButtonProps) {
  return <StyledButton {...props}/>
}

export default Button;
