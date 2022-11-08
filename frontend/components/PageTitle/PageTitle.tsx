import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const PageTitleComponent = styled.h1`
  color: ${theme.colors.black[100]};
  ${theme.fonts.heading01}
`;

export const PageTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <PageTitleComponent>{children}</PageTitleComponent>;
