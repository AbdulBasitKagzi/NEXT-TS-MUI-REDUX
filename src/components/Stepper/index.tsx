import React, { useMemo } from "react";
import { assets } from "@/assets";
import { StepIcon, useTheme } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface stepperComponentProps {
  page: number;
  steps: Array<string>;
}

function StepperComponent({ page, steps }: stepperComponentProps): JSX.Element {
  const theme = useTheme();

  const MemoizedCustomStepIcon = useMemo(() => {
    function CustomStepIcon(props: any) {
      const { active, completed } = props;

      return (
        <StepIcon
          icon={
            completed ? (
              <img
                src={assets.icons.stepperComplete.src}
                alt="stepperComplete"
              />
            ) : (
              <img
                src={assets.icons.stepperIncomplete.src}
                alt="stepperIncomplete"
              />
            )
          }
          active={active}
          completed={completed}
        />
      );
    }
    return React.memo(CustomStepIcon);
  }, []);

  return (
    <>
      <Stepper
        activeStep={page}
        alternativeLabel
        sx={{
          ".MuiStep-root": {
            color: theme.palette.primary.contrastText,
          },
          ".Mui-completed": {
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={MemoizedCustomStepIcon}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}

export default StepperComponent;
