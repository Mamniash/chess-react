import { Board } from "./Board";
import { Figure } from "./figures/Figure";

export enum Colors {
   WHITE = "white",
   BLACK = "black"
}

export class Cell {
   readonly x: number;
   readonly y: number;
   readonly color: Colors;
   figure: Figure | null;
   board: Board
   availabele: boolean;
   id: number;

   constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.figure = figure;
      this.board = board;
      this.availabele = false;
      this.id = Math.random();
   }

   moveFigure(target: Cell) {
      if (this.figure && this.figure?.canMove(target)) {
         //this.figure.moveFigure(target);
         target.figure = this.figure;
         this.figure = null;
      }
   }
}