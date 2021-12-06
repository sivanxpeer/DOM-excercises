
function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function(){
    if(this.a===this.b &&this.b===this.c&&this.c===this.d)
        return true;
    return false;
}

   let s1 = new Square(2,3,4,5);
   let s2 = new Square(5,5,5,5);
   console.log(s1.isSquare());
   console.log(s2.isSquare());
