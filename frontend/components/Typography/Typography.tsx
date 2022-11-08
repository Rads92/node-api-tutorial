import styled from "styled-components";
import { theme } from "@/styles";

const TypographyComponent = styled.p`
  ${theme.fonts.body01};
`;

export const Typography: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <TypographyComponent>{children}</TypographyComponent>;
