"use client";
import React from "react";
import { useProperty } from "@/lib/stateManage/globalState";

export default function CodePreviewBox({ id }: { id: number }) {
  const components = useProperty((state) => state.propertyForComponent);
  const text = components.filter((data) => data.idforPreviewElement === id)[0]
    ?.text_Property;

  return (
    <div>
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
}
