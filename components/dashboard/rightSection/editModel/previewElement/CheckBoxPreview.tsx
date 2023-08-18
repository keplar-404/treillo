import { Checkbox } from "@/components/ui/checkbox";

export default function CheckBoxPreview() {
  return (
    <div className="flex flex-row gap-x-3 items-center">
      <Checkbox />
      <p>This is checkbox</p>
    </div>
  );
}
