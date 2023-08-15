import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import AddElement from "./editElement/AddElement";
import EditElementStyle from "./editElementStyle/EditElementStyle";
import PreviewElement from "./previewElement/PreviewElement";
export default function ModelBox() {
  return (
    <>
      <div>
        <AlertDialogContent>
         
          

            {/* my component */}
            <div className="flex justify-between items-center py-[2.6rem]">
            <AddElement />
            <EditElementStyle/>
            <PreviewElement />
            </div>

         
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>




        </AlertDialogContent>
      </div>
    </>
  );
}
