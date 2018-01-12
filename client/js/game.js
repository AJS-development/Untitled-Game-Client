"use strict";
/*
    Toweratta.tk - Online Multiplayer Game
    Copyright (C) 2017 Andrew S
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var supportsES6 = function () {
    try {
        new Function("(a = 0) => a");
        return true;
    } catch (err) {
        return false;
    }
}();


if (!supportsES6) {
    alert("ES6 is not supported! Please use a newer browser!");
}

Map.prototype.every = function (c) {
    var a = this.entries()
    var b;
    while (b = a.next().value) {
        if (!c(b[1], b[0])) return false;
    }

    return true;
}
Map.prototype.toArray = function () {
    var array = [];
    this.forEach(function (a) {
        array.push(a)
    })
    return array
}

Map.prototype.map = function (c) {
    var f = new Map();
    var a = this.entries()
    var b;
    while (b = a.next().value) {
        f.set(b[0], c(b[1], b[0]))
    }
    return f;

}
Map.prototype.filter = function (c) {
    var f = new Map();
    var a = this.entries()
    var b;
    while (b = a.next().value) {
        if (c(b[1], b[0])) f.set(b[0], b[1])
    }
    return f;

}
Map.prototype.peek = function () {
    var a = this.entries();
    var b = a.next().value;
    return (b) ? b[1] : false;
}

var Game = (function (window) {
    const dev = false;
    let Players = new Map();
    let Units = new Map();
    let viewBox = {
        x: 500,
        y: 500,
        width: 0,
        height: 0
    }
    let unitData = Exports.getObjectData();
    const lbConfig = {
        type: 0,
        title: "Leaderboard",
        titleFont: "30px Ubuntu",
        titleStyle: "#FFFFFF",
        lbFont: "20px Ubuntu",
        fillStyle: "#000000",
        teamColors: ["#333333", "#FF3333", "#33FF33", "#3333FF"]
    }
    let mouse = {
        x: 0,
        y: 0
    }
    let sqrtLib = [];

    for (var i = 0; i < 1000000; i++) {
        sqrtLib.push(Math.sqrt(i))
    }

    function sqrt(a) {
        var b = sqrtLib[~~a];
        if (b === undefined) {
            return Math.sqrt(~~a);
        }
        return b
    }

    let socket = null;

    let renderer;

    let stage;
    let camera;

    let performance = window.performance || Date;
    let timestamp = performance.now();

    let User = null;
    const renderOptions = {
        autoResize: true,
        resolution: 2,
        clearBeforeRender: true,
        roundPixels: true
    };

    let Colors = [0x4286f4, 0xfc2a2a, 0x51f704, 0x347218, 0xf6ff00, 0xad00cc, 0x5500cc, 0xff3fc5, 0x6ecde5, 0xff832d, 0x78e2c7, 0xeae096]


    if (dev) console.log("Dev Mode");



    // Dev logging

    let logDev = dev;
    let logData = [];
    const log = window.logDev = function ( /**/ ) {
        const args = Array.prototype.slice.call(arguments);
        if (logDev) {
            console.log.apply(this, args);
        } else {
            logData.push(args);
        }
    };

    window.showDevLog = function () {
        logDev = true;
        logData.forEach((d) => {
            console.log.apply(this, d);
        });
        logData = [];
    };

    window.hideDevLog = () => {
        logDev = false;
    };

    window.stats = () => {
        showStats = true;
    }

    function getScreen() {
        return {
            x: window.innerWidth,
            y: window.innerHeight
        };
    }

    function render() {
        renderer.render(camera)
    }
    let win = getScreen();
    renderer = new PIXI.WebGLRenderer(win.x, win.y, renderOptions);
    if (!renderer) {
        alert("Could not establish renderer. Does your browser support WebGL?");
        return;
    }
    renderer.backgroundColor = 0xf7f7f7;
    //Add the canvas to the HTML document
    $("#gameContainer").append(renderer.view);

    stage = new PIXI.Container();

    camera = new PIXI.Container();
    camera.addChild(stage);

    render();


    let genericTextures = Exports.getGenericSprites(renderer);
    let coloredTextures = [];

    Colors.forEach((color) => {
        coloredTextures.push(Exports.getColoredSprites(color, renderer));
    });

    class Player {
        constructor(id, color, x, y) {
            this.id = id;
            this.color = color;
            this.x = x;
            this.y = y;
            this.nodes = new Map();
        }

    }

    class Unit {
        constructor(id, type, x, y, owner) {
            this.id = id;
            this.type = type;
            this.x = x;
            this.y = y;
            this.owner = owner;
            this.data = unitData[this.type];

            this.owner.nodes.set(this.id, this);

            var container = this.sprite = new PIXI.Container();
            this.data.render.forEach((id) => {
                var text = getTexture(this.owner.color, id);
                var sprite = PIXI.Sprite.from(text[0]);
                sprite.pivot.set(-text[1], -text[2]);
                container.addChild(sprite)
            });
            stage.addChild(container);
            container.position.set(x, y);
        }
        shoot() {

        }
        update(now) {
            if (this.data.turrets) {
                this.data.turrets.forEach((turret, i) => {
                    var d = Math.floor((Math.sin(timestamp / 100 + Math.PI / 2 * i)) * -1.5);
                    var rot = this.sprite.children[turret].rotation = Math.PI * (Math.sin(timestamp / 1000) + 1);
                    this.sprite.children[turret].position.set(Math.cos(rot) * d, Math.sin(rot) * d);

                })


            }
        }
    }

    function gameLoop(diffT) {
        var newMouse = renderer.plugins.interaction.mouse.global
        if (newMouse.x !== mouse.x || newMouse.y !== mouse.y) {
            mouse.x = newMouse.x;
            mouse.y = newMouse.y;
        }
        Units.forEach((unit) => {
            unit.update()
        })

        moveCamera();
        render();
    }

    function timerLoop() {
        requestAnimationFrame(timerLoop);
        let now = performance.now();
        gameLoop(now - timestamp)
        timestamp = now;
    }
    timerLoop();
    var player = new Player(0, 0, 0, 0);

    var X = 50;
    var Y = 50;
    coloredTextures[0].forEach((text) => {
        var s = PIXI.Sprite.from(text[0]);
        stage.addChild(s);
        s.pivot.set(-text[1], -text[1]);
        s.position.set(X, Y)

        X += 50;
        if (X >= 1000) {
            X = 50;
            Y += 50;
        }
    })
    genericTextures.forEach((text) => {
        var s = PIXI.Sprite.from(text[0]);
        stage.addChild(s);
        s.pivot.set(-text[1], -text[1]);
        s.position.set(X, Y)

        X += 50;
        if (X >= 1000) {
            X = 50;
            Y += 50;
        }
    })

    unitData.forEach((unit, i) => {
        var newunit = new Unit(i, i, X, Y, player);
        Units.set(i, newunit);

        X += 50;
        if (X >= 1000) {
            X = 50;
            Y += 50;
        }
    })


    function moveCamera() {
        stage.pivot.set(viewBox.x, viewBox.y)
    }

    function resize() {
        var dim = getDim();
        stage.position.set(dim.width >> 1, dim.height >> 1)
    }

    function getDim() {
        return {
            width: renderer.width / 2,
            height: renderer.height / 2
        };
    }

    function getTexture(color, id) {
        if (id < 0) {
            return genericTextures[-id - 1];
        } else {
            return coloredTextures[color][id];
        }
    }
    resize();
    moveCamera();
    render();

    function connect(url) {
        socket = new SimpleSocket(url)
        socketEvents(socket)
    }

    function socketEvents(socket) {
        socket.on('connection', function () {

        })
        socket.on('disconnect', function () {

        })
        socket.on('error', function () {

        })
        socket.on('addUser', function () {

        });
        socket.on('removeUser', function () {

        });
        socket.on('update', function (fastBuffer) {

        });
        socket.on('protocol', function (protocol) {

        })
    }

    window.loaded();

})(window);
