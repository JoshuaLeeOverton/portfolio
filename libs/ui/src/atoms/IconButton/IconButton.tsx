import { styled, IconButton as MuiIconButton, IconButtonProps } from "@mui/material";

const StyledIconButton = styled(MuiIconButton)<IconButtonProps>(({ theme }) => ({}));

export function IconButton(props: IconButtonProps) {
  return <StyledIconButton {...props}/>
}

export default IconButton;
