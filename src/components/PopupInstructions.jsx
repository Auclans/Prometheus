import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen("paper")} className="instructionsButton">
        Instructions
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Instructions</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            So the functioning is pretty simple and is based on 5 concepts :
            <ul>
              <li>
                You will be given a grid where you can control and move a single
                node in 4 directions : Up , Down , Left and Right .It will be
                indicated with a green color
              </li>
              <img src="./images/first.png" alt="location" />
              <li>
                The objective is to find a randomly generated hidden node ,
                which will be marked with a yellow color .
              </li>
              <img src="./images/second.png" alt="finish" />
              <li>
                To get to the hidden node , you will have to skirt randomly
                generated obstacles that will be on the way to it . They will be
                marked with a red color .
              </li>
              <img src="./images/third.png" alt="redZones" />
              <li>
                Every time you move , you will only be able to see the closest
                nodes to your actual position, the rest will be hidden and
                updated as you move.
              </li>
              <img src="./images/fourth.png" alt="localGrid" />
              <li>
                In case you want to see where the hidden node is , you will have
                at your disposal 3 algorithms that will try to find the random
                generated solution :
                <ul>
                  <li>
                    DFS : It will traverse the grid until it finds the node , in
                    a deep and focused manner .
                  </li>
                  <li>
                    BFS : It will traverse the grid until it finds the node , in
                    a progressive and escalated manner .
                  </li>
                  <li>
                    Djikstra : It will traverse the grid until it finds the node
                    and it will return the shortest path from your actual
                    position to it .
                  </li>
                </ul>
              </li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Got it !</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
