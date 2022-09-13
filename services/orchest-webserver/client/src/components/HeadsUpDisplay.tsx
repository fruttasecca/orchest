import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeadsUpDisplay = styled(Stack)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  z-index: 0;

  > * {
    pointer-events: auto;
  }
`;
