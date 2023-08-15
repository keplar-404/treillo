import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ModelBox from "./ModelBox";

export default function EditModel() {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Edit</Button>
        </AlertDialogTrigger>
        {/* my component */}
        <div className="flex">
        <ModelBox />
        </div>
      </AlertDialog>
    </>
  );
}
