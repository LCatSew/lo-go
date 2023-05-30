class ParentShape {
    //PSEUDO CODING:

    //TO-DO:
    //The application must include Triangle, Circle, and Square classes, 
    //as well as tests for each of these classes using Jest. 
    //use inheritance to reuse the code in the child classes.
    constructor (charInput, colorInput, shapeSelect) {
        this.charInput = charInput;
        this.colorInput = colorInput;
        this.shapeSelect = shapeSelect;
    }
}
class Triangle extends ParentShape {
    constructor (charInput, colorInput, shapeSelect) {
        super(charInput, colorInput, shapeSelect)
            
    }
}
class Square extends ParentShape {
    constructor (charInput, colorInput, shapeSelect) {
        super(charInput, colorInput, shapeSelect)
            
    }
}
class Circle extends ParentShape {
    constructor (charInput, colorInput, shapeSelect) {
        super(charInput, colorInput, shapeSelect)
            
    }
}