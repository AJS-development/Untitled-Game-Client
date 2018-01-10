 function getStarVert(radius, radius2, points) {
     var vert = [];
     points = points * 2;
     var angle = Math.PI * 2 / points;
     for (var i = 0; i < points; i++)
         if (i % 2 === 0) vert.push(radius * Math.cos(angle * i), radius * Math.sin(angle * i));
         else vert.push(radius2 * Math.cos(angle * i), radius2 * Math.sin(angle * i));
     vert.push(radius, 0)
     return vert;
 }

 function getPolyVert(radius, points, off) {
     var vert = [];
     off = off || 0;
     var angle = Math.PI * 2 / points;
     for (var i = 0; i < points; i++) vert.push(radius * Math.cos(angle * i + off), radius * Math.sin(angle * i + off))
     vert.push(radius * Math.cos(off), radius * Math.sin(off))
     return vert;
 }

 window.Exports = {

     getGenericSprites: function () {
         var sprites = [];


         g = new PIXI.Graphics();
         g.beginFill(0x8e8e8e);
         g.lineStyle(2, 0, .1)
         g.drawPolygon([-15, -15, 0, -10, 15, -15, 0, 15, -15, -15])
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(-3, -3, 15, 6)
         g.drawCircle(0, 0, 6)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(-4, -5, 20, 10)
         g.drawCircle(0, 0, 8)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(-4, -4, 25, 8)
         g.drawCircle(0, 0, 8)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(-4, 0, 23, 6);
         g.drawRect(-4, -6, 23, 6);
         g.drawCircle(0, 0, 8)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(-4, -4, 15, 8)
         g.drawRect(11, -4, 3, 8)
         g.drawRect(14, -4, 4, 8)
         g.drawCircle(0, 0, 8)
         g.endFill();
         sprites.push(g)



         return sprites;
     },

     getColoredSprites: function (color) {

         var sprites = [];
         var g = new PIXI.Graphics();
         g.beginFill(color);
         g.lineStyle(2, 0, .1)
         g.drawPolygon([0, -15, 10, -10, 0, 15, -10, -10, 0, -15])
         g.endFill();
         sprites.push(g)


         g = new PIXI.Graphics();
         g.beginFill(color);
         g.lineStyle(2, 0, .1)
         g.drawPolygon([0, -15, 10, -10, 4, 0, 0, 15, -4, 0, -10, -10, 0, -15])
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(color);
         g.lineStyle(2, 0, .2)
         g.drawPolygon([-15, -25, 15, -25, 0, 25, -15, -25])
         g.endFill();
         sprites.push(g)


         g = new PIXI.Graphics();
         g.beginFill(color);
         g.lineStyle(2, 0, .2)
         g.drawPolygon([-15, -25, -8, -25, -8, -20, 7, -20, 7, -25, 15, -25, 0, 25, -15, -25])
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(color);
         g.lineStyle(2, 0, .1)
         g.drawRoundedRect(-15, -15, 30, 30, 5)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(0xb7b7b7);
         g.drawPolygon([-16, -15, 11, -15, 16, 0, 11, 15, -16, 15, -16, -15]);
         g.endFill();
         g.beginFill(color);
         g.drawRoundedRect(-14, -13, 25, 25, 5)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(color);
         g.lineStyle(2, 0, .1)
         g.drawPolygon([-15, -15, 0, -10, 15, -15, 0, 15, -15, -15])
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.drawCircle(0, 0, 8)
         g.lineStyle(1, 0, .2)
         g.drawRect(-7, -4, 25, 8)
         g.drawCircle(0, 0, 3)
         g.drawRect(0, -1, 3, 2)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawCircle(0, 0, 15)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawPolygon(getStarVert(15, 11, 7))
         g.endFill();
         sprites.push(g)


         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawPolygon(getPolyVert(15, 6))
         g.endFill();
         g.beginFill(0x727272);
         g.drawPolygon(getPolyVert(15, 3, Math.PI / 2))
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawPolygon(getPolyVert(15, 6))
         g.endFill();
         g.beginFill(0x727272);
         g.drawPolygon(getPolyVert(12, 6, Math.PI / 2))
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.beginFill(0x727272);
         g.drawRect(-10, -15, 20, 5)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.lineStyle(1, 0, .1)
         g.beginFill(0x727272);
         g.drawRect(-15, -15, 15, 5)
         g.drawRect(0, -15, 15, 5)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.beginFill(0x727272);
         g.drawRect(-10, -15, 20, 5)
         g.drawRect(-10, -2.5, 20, 17)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.beginFill(0x727272);
         g.drawRect(-10, -15, 20, 5)
         g.drawRect(-10, -5, 20, 20)
         g.endFill();
         g.beginFill(color);
         g.drawRect(-6, 0, 12, 12)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.beginFill(0x727272);
         g.drawRect(-10, -15, 20, 5)
         g.drawRect(-10, -5, 5, 17)
         g.drawRect(-2, -5, 5, 17)
         g.drawRect(5, -5, 5, 17)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawPolygon(getPolyVert(15, 6))
         g.endFill();

         g.drawPolygon(getPolyVert(10, 6))

         sprites.push(g)

         return sprites;
     }
 }
