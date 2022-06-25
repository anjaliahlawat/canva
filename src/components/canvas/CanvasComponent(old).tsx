import React, { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./styles(old)";

type CanvasProps = {
  selectionTool: string | undefined;
};

function CanvasComponent({ selectionTool }: CanvasProps): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);

  const [ctx, setCTX] = useState<CanvasRenderingContext2D | null>();
  const [ctxo, setCTXO] = useState<CanvasRenderingContext2D | null>();
  const [isDown, setIsDown] = useState(false);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [prevStartX, setPrevStartX] = useState<number>(0);
  const [prevStartY, setPrevStartY] = useState<number>(0);
  const [prevWidth, setPrevWidth] = useState<number>(0);
  const [prevHeight, setPrevHeight] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    if (canvasRef.current && overlayRef.current) {
      setCTX(canvasRef.current.getContext("2d"));
      setCTXO(overlayRef.current.getContext("2d"));

      if (ctx && ctxo) {
        const c1 = ctx;
        c1.strokeStyle = "blue";
        c1.lineWidth = 3;

        setCTX(c1);

        const c2 = ctxo;
        c2.strokeStyle = "blue";
        c2.lineWidth = 3;

        setCTXO(c2);
      }

      setOffsetX(canvasRef.current.offsetLeft);
      setOffsetY(canvasRef.current.offsetTop);
      setScrollX(canvasRef.current.scrollLeft);
      setScrollY(canvasRef.current.scrollTop);

      // console.log("offset x:", offsetX);
      // console.log("offset y:", offsetY);
      // console.log("scroll x:", scrollX);
      // console.log("scroll y:", scrollY);
    }

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousemove", handleMouseMove);
  }, [selectionTool]);

  const handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    setIsDown(false);
    const c1 = ctxo;
    if (c1) {
      c1.strokeRect(prevStartX, prevStartY, prevWidth, prevHeight);
      setCTXO(c1);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // save the starting x/y of the rectangle
    setStartX(parseInt(e.clientX, 10) - offsetX);
    setStartY(parseInt(e.clientY, 10) - offsetY);

    // set a flag indicating the drag has begun
    setIsDown(true);
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // if we're dragging
    if (!isDown) {
      // console.log("not active");
    }
    const mouseX = parseInt(e.clientX, 10) - offsetX;
    const mouseY = parseInt(e.clientY, 10) - offsetY;

    const width = mouseX - startX;
    const height = mouseY - startY;

    // clear the canvas
    const c1 = ctx;
    if (canvasRef.current && c1) {
      c1.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      c1.strokeRect(startX, startY, width, height);
      setCTX(c1);
    }

    setPrevStartX(startX);
    setPrevStartY(startY);

    setPrevWidth(width);
    setPrevHeight(height);
  };

  return (
    <div className="canvasWrapper" style={styles.canvasWrapper}>
      <canvas id="overlay" width="300" height="300" ref={overlayRef} />
      <canvas id="canvas" width="200" height="100" ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasComponent;
