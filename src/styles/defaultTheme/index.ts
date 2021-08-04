import { Theme } from "../theme";

type CustomTheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
