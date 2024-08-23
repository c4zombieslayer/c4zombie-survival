export class Vector2D {
    x:          number;
    y:          number;
    magnitude:  number;

    static ZERO = new Vector2D(0, 0);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }


    getNormal(): Vector2D {
        if(this.magnitude === 0) return Vector2D.ZERO;
        return new Vector2D(this.x / this.magnitude, this.y / this.magnitude);
    }
}