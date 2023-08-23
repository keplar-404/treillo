import React from "react";
import { useTheme } from "next-themes";
import { useProperty } from "@/lib/stateManage/globalState";

type TextAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

export default function TextBoxPreview({ id }: { id: number }) {
  const use_Property = useProperty((state) => state?.propertyForComponent);

  // Filter the property by the id
  // Filter the property by the id and assign it a type
  const allProperty = use_Property.filter(
    (data: any) => data.idforPreviewElement === id
  );

  // Get the color and position from the property
  const color = allProperty[0]?.color_Style;
  const position: string | undefined = allProperty[0]?.position;

  // Get the resolved theme from the hook
  const theme = useTheme();

  // Define a function to return the color based on the theme and the initial value
  let initial = true;
  const getColor = () => {
    if (color === "#000000") {
      if (initial === true) {
        if (theme.resolvedTheme === "dark") {
          return "white";
        } else if (theme.resolvedTheme === "light") {
          return "black";
        }
      }
    } else {
      initial = false;
      return color;
    }
  };

  // Return a paragraph element with the style and text from the property
  return (
    <p
      style={{
        color: getColor(),
        textAlign: position as TextAlign | undefined,
      }}
    >
      {allProperty[0]?.text_Property}
    </p>
  );
}
