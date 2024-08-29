// Canvas handling script.

import { Game } from "../system/game";


/**
 * Resizes the canvas according to current window ratios. 16 x 9 ratio is strictly kept.
 * 
 * @param canvas    The canvas element.
 * @param ctx       The canvas context.
 */
export function resizeCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    if(window.innerWidth > window.innerHeight * (Game.GAME_WIDTH / Game.GAME_HEIGHT)) {
        canvas.width = window.innerHeight * (Game.GAME_WIDTH / Game.GAME_HEIGHT);
        canvas.height = window.innerHeight;
        ctx.scale(window.innerHeight * (Game.GAME_WIDTH / Game.GAME_HEIGHT) / Game.GAME_WIDTH, window.innerHeight / Game.GAME_HEIGHT);
    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth * (Game.GAME_HEIGHT / Game.GAME_WIDTH);
        ctx.scale(window.innerWidth / Game.GAME_WIDTH, window.innerWidth * (Game.GAME_HEIGHT / Game.GAME_WIDTH) / Game.GAME_HEIGHT);
    }
}


/**
 * Converts window XY values to canvas XY values.
 * 
 * @param canvas    The canvas element.
 * @param x         The X value to convert.
 * @param y         The Y value to convert.
 * @returns         The converted XY values as an object. {x: number, y: number}
 */
export function windowToCanvasXY(canvas: HTMLCanvasElement, x: number, y: number): {x: number, y: number} {
    return {x: x * (Game.GAME_WIDTH / window.innerWidth), y:  y * (Game.GAME_HEIGHT / (window.innerWidth * (9 / 16)))};
}