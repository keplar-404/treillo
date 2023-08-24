import { Checkbox } from "@/components/ui/checkbox";
import { useProperty } from "@/lib/stateManage/globalState";

export default function CheckBoxPreview({ id }: { id:number }) {
  const text = useProperty(state=>state.propertyForComponent)?.filter(data=> data.idforPreviewElement === id)?.[0]?.text_Property ?? "";
  return (
    <div className="flex flex-row gap-x-3 items-center">
      <Checkbox />
      <p>{text}</p>
    </div>
  );
}
