import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import AddElement from "./editElement/AddElement";
import EditElementStyle from "./editElementStyle/EditStyleElementModel";
import PreviewElement from "./previewElement/PreviewElement";
export default function ModelBox({ taskParentId, coulmnParentid }: { taskParentId:number, coulmnParentid?:number }) {
  return (
    <>
      <div>
        <AlertDialogContent className="max-w-fit" >
          {/* my component */}
          <div className="flex gap-x-[2rem] justify-between items-center py-[2.6rem]">
            <AddElement taskParentId={taskParentId} coulmnParentid={coulmnParentid} />
            <EditElementStyle taskParentId={taskParentId} coulmnParentid={coulmnParentid}/>
            <PreviewElement taskParentId={taskParentId} coulmnParentid={coulmnParentid}/>
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
