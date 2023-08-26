import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import AddElement from "./editElement/AddElement";
import EditElementStyle from "./editElementStyle/EditStyleElementModel";
import PreviewElement from "./previewElement/PreviewElement";
export default function ModelBox({ taskParentId }: { taskParentId:number }) {
  return (
    <>
      <div>
        <AlertDialogContent className="max-w-fit" >
          {/* my component */}
          <div className="flex gap-x-[2rem] justify-between items-center py-[2.6rem]">
            <AddElement taskParentId={taskParentId} />
            <EditElementStyle taskParentId={taskParentId}/>
            <PreviewElement taskParentId={taskParentId}/>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Save</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </div>
    </>
  );
}
