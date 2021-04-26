import styled, { DefaultTheme } from "styled-components";
import getColor from "../../util/getColor";
import { TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getThemeTextColor = ({ outline, variant = "primary", theme,color }: ThemedProps) =>
  outline ? (color ?? getColor(variant, theme)) : "#ffffff";

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background-color: ${({ outline, theme, color, variant = "primary" }) =>
    outline ? "transparent" : (color ?? getColor(variant, theme))};
  border: 2px solid ${({ variant = "primary", theme, color }) => (color ?? getColor(variant, theme))};
  border-radius: 0px;
  color: ${getThemeTextColor};
  display: inline-flex;
  font-size: 12px;
  font-weight: 400;
  height: 21px;
  line-height: 1.5;
  padding: 0 7px;
  white-space: nowrap;

  svg {
    fill: ${getThemeTextColor};
  }
`;

export default null;
