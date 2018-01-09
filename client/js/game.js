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
    let Units = [];
    let viewBox = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
    const lbConfig = {
        type: 0,
        title: "Leaderboard",
        titleFont: "30px Ubuntu",
        titleStyle: "#FFFFFF",
        lbFont: "20px Ubuntu",
        fillStyle: "#000000",
        teamColors: ["#333333", "#FF3333", "#33FF33", "#3333FF"]
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

    const renderOptions = {
        autoResize: true,
        resolution: 2,
        clearBeforeRender: true,
        roundPixels: true
    };

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
    renderer.backgroundColor = 0xFFFFFF;
    //Add the canvas to the HTML document
    $("#gameContainer").append(renderer.view);

    stage = new PIXI.Container();

    camera = new PIXI.Container();
    camera.addChild(stage);

    render();


    function gameLoop(diffT) {
        render();
    }

    function timerLoop() {
        requestAnimationFrame(timerLoop);
        let now = performance.now();
        gameLoop(now - timestamp)
        timestamp = now;
    }

    //timerLoop();

    var g = new PIXI.Graphics(); // Basic unit
    g.beginFill(0x4286f4);
    g.lineStyle(2, 0, .1)
    g.drawPolygon([10, 0, 20, 5, 10, 30, 0, 5, 10, 0])
    g.endFill();
    stage.addChild(g)

    g = new PIXI.Graphics(); // upgrade basic unit
    g.beginFill(0x4286f4);
    g.lineStyle(2, 0, .1)
    g.drawPolygon([10, 0, 20, 5, 14, 15, 10, 30, 6, 15, 0, 5, 10, 0])
    g.endFill();

    stage.addChild(g)
    g.position.set(50, 0)

    g = new PIXI.Graphics();
    g.beginFill(0x4286f4);
    g.lineStyle(2, 0, .2)
    g.drawPolygon([0, 0, 30, 0, 15, 50, 0, 0])
    g.endFill();

    stage.addChild(g)
    g.position.set(0, 50)


    g = new PIXI.Graphics();
    g.beginFill(0x4286f4);
    g.lineStyle(2, 0, .2)
    g.drawPolygon([0, 0, 7, 0, 7, 5, 22, 5, 22, 0, 30, 0, 15, 50, 0, 0])
    g.endFill();
    stage.addChild(g)
    g.position.set(50, 50)

    g = new PIXI.Graphics();
    g.beginFill(0x4286f4);
    g.lineStyle(2, 0, .1)
    g.drawRoundedRect(0, 0, 30, 30, 5)
    g.endFill();
    stage.addChild(g)
    g.position.set(0, 120)

    g = new PIXI.Graphics();
    g.lineStyle(2, 0, .1)
    g.beginFill(0xb7b7b7);
    g.drawPolygon([0, 0, 27, 0, 32, 15, 27, 30, 0, 30, 0, 0]);
    g.endFill();
    g.beginFill(0x4286f4);
    g.drawRoundedRect(2, 2, 25, 25, 5)
    g.endFill();
    // g.scale.set(0.5, 0.5)
    stage.addChild(g)
    g.position.set(50, 120)


    g = new PIXI.Graphics();
    g.beginFill(0x4286f4);
    g.lineStyle(2, 0, .1)
    g.drawPolygon([0, 0, 15, 5, 30, 0, 15, 30, 0, 0])
    g.endFill();
    stage.addChild(g)
    g.position.set(0, 170)

    g = new PIXI.Graphics();
    g.beginFill(0x8e8e8e);
    g.lineStyle(2, 0, .1)
    g.drawPolygon([0, 0, 15, 5, 30, 0, 15, 30, 0, 0])
    g.endFill();
    stage.addChild(g)
    g.position.set(50, 170)

    g = new PIXI.Graphics();
    g.beginFill(0x727272);
    g.lineStyle(1, 0, .2)
    g.drawRect(-3, -3, 15, 6)
    g.drawCircle(0, 0, 6)
    g.endFill();
    stage.addChild(g)
    g.position.set(200, 10)

    g = new PIXI.Graphics();
    g.beginFill(0x727272);
    g.lineStyle(1, 0, .2)
    g.drawRect(-4, -5, 20, 10)
    g.drawCircle(0, 0, 8)
    g.endFill();
    stage.addChild(g)
    g.position.set(250, 10)

    g = new PIXI.Graphics();
    g.beginFill(0x727272);
    g.lineStyle(1, 0, .2)
    g.drawRect(-4, -4, 25, 8)
    g.drawCircle(0, 0, 8)
    g.endFill();
    stage.addChild(g)
    g.position.set(300, 10)

    g = new PIXI.Graphics();
    g.beginFill(0x727272);
    g.lineStyle(1, 0, .2)
    g.drawRect(-4, 0, 23, 6);
    g.drawRect(-4, -6, 23, 6);
    g.drawCircle(0, 0, 8)
    g.endFill();
    stage.addChild(g)
    g.position.set(200, 60)

    g = new PIXI.Graphics();
    g.beginFill(0x727272);
    g.lineStyle(1, 0, .2)
    g.drawRect(-4, -4, 15, 8)
    g.drawRect(11, -4, 3, 8)
    g.drawRect(14, -4, 4, 8)
    g.drawCircle(0, 0, 8)
    g.endFill();
    stage.addChild(g)
    g.position.set(250, 60)

    g = new PIXI.Graphics();
    g.beginFill(0x727272);
    g.drawCircle(0, 0, 8)
    g.lineStyle(1, 0, .2)
    g.drawRect(-7, -4, 25, 8)
    g.drawCircle(0, 0, 3)
    g.drawRect(0, -1, 3, 2)
    g.endFill();
    stage.addChild(g)
    g.position.set(300, 60)
    render();
})(window);
