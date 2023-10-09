import { Cell, Colors } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
      this.name = FigureNames.PAWN;
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) return false;
      // some code
      return true;
   }
}