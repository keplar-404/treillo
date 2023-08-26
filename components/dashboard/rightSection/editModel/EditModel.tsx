import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ModelBox from "./ModelBox";

export default function EditModel({ taskParentId }: { taskParentId:number }) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          {/* <Button>Edit</Button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="18"
            viewBox="0 0 5 15"
            fill="none"
            className="cursor-pointer dark:hidden block"
          >
            <path
              d="M2.13973 5.23046C3.32253 5.23046 4.27947 6.1874 4.27947 7.3702C4.27947 8.553 3.32253 9.50993 2.13973 9.50993C0.956937 9.50993 0 8.553 0 7.3702C0 6.1874 0.956937 5.23046 2.13973 5.23046ZM0 2.13973C0 3.32253 0.956937 4.27947 2.13973 4.27947C3.32253 4.27947 4.27947 3.32253 4.27947 2.13973C4.27947 0.956937 3.32253 0 2.13973 0C0.956937 0 0 0.956937 0 2.13973ZM0 12.6007C0 13.7835 0.956937 14.7404 2.13973 14.7404C3.32253 14.7404 4.27947 13.7835 4.27947 12.6007C4.27947 11.4179 3.32253 10.4609 2.13973 10.4609C0.956937 10.4609 0 11.4179 0 12.6007Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="18"
            viewBox="0 0 5 15"
            fill="none"
            className="cursor-pointer dark:block hidden"
          >
            <path
              d="M2.13973 5.23046C3.32253 5.23046 4.27947 6.1874 4.27947 7.3702C4.27947 8.553 3.32253 9.50993 2.13973 9.50993C0.956937 9.50993 0 8.553 0 7.3702C0 6.1874 0.956937 5.23046 2.13973 5.23046ZM0 2.13973C0 3.32253 0.956937 4.27947 2.13973 4.27947C3.32253 4.27947 4.27947 3.32253 4.27947 2.13973C4.27947 0.956937 3.32253 0 2.13973 0C0.956937 0 0 0.956937 0 2.13973ZM0 12.6007C0 13.7835 0.956937 14.7404 2.13973 14.7404C3.32253 14.7404 4.27947 13.7835 4.27947 12.6007C4.27947 11.4179 3.32253 10.4609 2.13973 10.4609C0.956937 10.4609 0 11.4179 0 12.6007Z"
              fill="white"
            />
          </svg>
        </AlertDialogTrigger>
        {/* my component */}
        <div className="flex">
        <ModelBox taskParentId={taskParentId} />
        </div>
      </AlertDialog>
    </>
  );
}
