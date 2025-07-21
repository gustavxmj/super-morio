// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000606060600000000000000000000000607070707070700000000000000000607070707070707000000060600000607070707070707070000060707060607070707070707070700060000070707070707070707070707000000000707070707070707070707070101010101010101010101010101010102020202020202020202020202040404020202020202020202020202020403030202020202020202020202020204030807070707070707070707070707040404`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . 2 . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . 2 . . 2 2 . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 . . 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.dungeon.hazardLava1,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
