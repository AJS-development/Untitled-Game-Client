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

     getObjectData: function () {

         return [ // 0 = towers, 1 = troops, 2 = 
             {
                 objType: 0,
                 id: 0,
                 name: 'Drill',
                 description: 'Generate parts for use in building things',
                 cost: 50,
                 render: [9],
                 speed: 0,
                 health: 50,
                 damageFactor: 0.3,
                 upgrades: [1]
             },
             {
                 objType: 0,
                 id: 1,
                 name: 'Advanced Drill',
                 description: 'Generate parts for use in building things quicker',
                 cost: 100,
                 render: [10],
                 speed: 0,
                 health: 50,
                 damageFactor: 0.3,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 2,
                 name: 'Barrier',
                 description: 'Has high health and high damage',
                 cost: 50,
                 render: [7],
                 speed: 0,
                 health: 150,
                 damageFactor: 0.3,
                 upgrades: [3]
             },
             {
                 objType: 0,
                 id: 3,
                 name: 'Reinforced Barrier',
                 description: 'Has higher health and higher damage',
                 cost: 200,
                 render: [8],
                 speed: 0,
                 health: 250,
                 damageFactor: 0.5,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 4,
                 name: 'Cannon',
                 description: 'Power over fire rate',
                 cost: 50,
                 render: [7, -5, -4],
                 turrets: [1],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: [5, 6]
             },
             {
                 objType: 0,
                 id: 5,
                 name: 'Super Cannon',
                 description: 'Higher power and range',
                 cost: 150,
                 render: [7, -6, -4],
                 turrets: [1],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 6,
                 name: 'Double Cannon',
                 description: 'Target two things at once',
                 cost: 150,
                 render: [7, -5, -3, -4],
                 turrets: [1, 2],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 7,
                 name: 'Turret',
                 description: 'A tower with a gun on top',
                 cost: 50,
                 render: [7, -3, -4],
                 turrets: [1],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: [8, 10]
             },
             {
                 objType: 0,
                 id: 8,
                 name: 'Machine gun',
                 description: 'A tower with a fast shooting machine gun',
                 cost: 100,
                 render: [7, -8, -14, -4],
                 turrets: [1, 2],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: [9]
             },
             {
                 objType: 0,
                 id: 9,
                 name: 'Gatlin gun',
                 description: 'A tower with a even faster gatlin gun',
                 cost: 150,
                 render: [7, -9, -4],
                 turrets: [1],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 10,
                 name: 'Long gun',
                 description: 'Longer range and reload',
                 cost: 100,
                 render: [7, -10, -4],
                 turrets: [1],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: [11]
             },
             {
                 objType: 0,
                 id: 11,
                 name: 'Scope gun',
                 description: 'Longer range and reload',
                 cost: 150,
                 render: [7, -4, -10, -11],
                 turrets: [2],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 12,
                 name: 'Storage',
                 description: 'Store more troops',
                 cost: 50,
                 render: [16],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 14,
                 name: 'Research',
                 description: 'Research improvements for your military',
                 cost: 100,
                 render: [17],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: [15, 16, 17, 18, 19, 20]
             },
             {
                 objType: 2,
                 id: 15,
                 name: 'Brutal fighters',
                 description: 'Fighters give more damage',
                 cost: 500,
                 render: [17],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 2,
                 id: 16,
                 name: 'Reinforced Tanks',
                 description: 'Tanks have more sheilding',
                 cost: 1000,
                 render: [17],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 2,
                 id: 17,
                 name: 'Turret Tanks',
                 description: 'Tanks have turret guns',
                 cost: 1500,
                 render: [17],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 2,
                 id: 18,
                 name: 'Speedy rammers',
                 description: 'Rammers are faster',
                 cost: 2000,
                 render: [17],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 2,
                 id: 19,
                 name: 'Defending Rammers',
                 description: 'Gives Rammers guns',
                 cost: 2500,
                 render: [17],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 2,
                 id: 20,
                 name: 'Stronger Drillers',
                 description: 'Drillers have more health',
                 cost: 2500,
                 render: [17],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 21,
                 name: 'Barracks',
                 description: 'Generates fast fighters',
                 cost: 100,
                 render: [11, -12],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: [22, 23, 25, 26]
             },
             {
                 objType: 0,
                 id: 22,
                 name: 'Efficient Barraks',
                 description: 'Quickly generates fighters faster',
                 cost: 500,
                 render: [11, -13],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 23,
                 name: 'Driller Factory',
                 description: 'Generates stronger and more damaging Drillers',
                 cost: 1000,
                 render: [15, -12],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: [24]
             },
             {
                 objType: 0,
                 id: 24,
                 name: 'Efficient Driller Factory',
                 description: 'Generates stronger and more damaging Drillers faster',
                 cost: 1000,
                 render: [15, -13],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 25,
                 name: 'Tank Factory',
                 description: 'Generates versatile Tanks',
                 cost: 2000,
                 render: [13, -12],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             },
             {
                 objType: 0,
                 id: 26,
                 name: 'Rammer Factory',
                 description: 'Generates strong but slow Rammers',
                 cost: 3000,
                 render: [14, -12],
                 speed: 0,
                 health: 50,
                 damageFactor: 1,
                 upgrades: []
             }
         ]


     },
     getGenericSprites: function (renderer) {
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
         g.drawCircle(0, 0, 6)
         g.endFill();
         sprites.push(g)


         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2);
         g.drawRect(0, -3, 12, 6)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawCircle(0, 0, 8)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(0, -5, 16, 10)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(0, -5, 13, 10)
         g.drawRect(13, -7, 9, 14)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(0, -4, 21, 8)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(0, 0, 19, 6);
         //g.drawRect(0, -6, 19, 6);
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(0, -4, 11, 8)
         g.drawRect(11, -4, 3, 8)
         g.drawRect(14, -4, 4, 8)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawRect(-7, -4, 25, 8)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         g.drawCircle(0, 0, 3)
         g.drawRect(0, -1, 3, 2)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(1, 0, .2)
         g.beginFill(0x727272);
         g.drawRect(-10, -15, 20, 5)
         g.endFill();
         sprites.push(g)
         console.log(g)

         g = new PIXI.Graphics();
         g.lineStyle(1, 0, .3)
         g.beginFill(0x727272);
         g.drawRect(-15, -15, 15, 5)
         g.drawRect(0, -15, 15, 5)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.beginFill(0x727272);
         g.lineStyle(1, 0, .2)
         //  g.drawRect(0, 0, 19, 6);
         g.drawRect(0, -6, 19, 6);
         g.endFill();
         sprites.push(g)
         return sprites.map((sprite) => {
             return [renderer.generateTexture(sprite, undefined, 2), sprite._bounds.minX, sprite._bounds.minY];
         });
     },

     getColoredSprites: function (color, renderer) {

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
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawCircle(0, 0, 13)
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

         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.lineStyle(1, 0, .1)

         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.beginFill(0x727272);

         g.drawRect(-10, -2.5, 20, 17)
         g.endFill();
         sprites.push(g)

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawRect(-15, -10, 30, 25)
         g.endFill();
         g.beginFill(0x727272);

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

         g = new PIXI.Graphics();
         g.lineStyle(2, 0, .1)
         g.beginFill(color);
         g.drawPolygon(getPolyVert(17, 8, Math.PI / 8))
         g.endFill();
         g.beginFill(0x727272);
         g.drawPolygon(getPolyVert(15, 8))
         g.endFill();
         g.beginFill(color);
         g.drawPolygon(getPolyVert(12, 8, Math.PI / 8))
         g.endFill();
         sprites.push(g)

         return sprites.map((sprite) => {
             return [renderer.generateTexture(sprite, undefined, 2), sprite._bounds.minX, sprite._bounds.minY];
         });
     }
 }
