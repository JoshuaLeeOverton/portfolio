import { Card as MuiCard, styled, CardProps } from "@mui/material";

const StyledCard = styled(MuiCard)<CardProps>(({ theme }) => ({}));

export function Card({...props}: CardProps) {
    return <StyledCard {...props} />
} 

export default Card