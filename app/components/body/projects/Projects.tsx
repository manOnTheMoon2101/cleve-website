import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Projects = () => {
  return (
    <div className="clear-both">
      <Dialog>
        <DialogTrigger asChild>
          <p>Projects</p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Weather App</DialogTitle>
            <DialogDescription>Tech Stack:</DialogDescription>
            <DialogDescription>Github:</DialogDescription>
            <DialogDescription>Live Web:</DialogDescription>
          </DialogHeader>
          <DialogDescription>
            <div className="w-6/12 float-left">image</div>

            <div className="w-6/12 float-right">content</div>
          </DialogDescription>

          <DialogDescription>
            <div className="w-6/12 float-left">content</div>

            <div className="w-6/12 float-right">image</div>
          </DialogDescription>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
