import React from "react";
import styled from "styled-components";
import { theme } from "@/styles";

const HeadingComponent = styled.h1`
  ${theme.fonts.heading01}
`;

export const Heading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <HeadingComponent>{children}</HeadingComponent>;
