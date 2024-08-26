export class Vector2D {
    // Variable types.
    x:          number;
    y:          number;

    magnitude:  number;


    // Static variables.
    static ZERO = new Vector2D(0, 0);


    // Static functions.
    static getDist(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }


    constructor(x: number, y: number) {
        // Coordinates.
        this.x = x;
        this.y = y;


        // Magnitude.
        this.magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }


    getNormal(): Vector2D {
        if(this.magnitude === 0) return Vector2D.ZERO;
        return new Vector2D(this.x / this.magnitude, this.y / this.magnitude);
    }


    getDist(other: Vector2D): number {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}