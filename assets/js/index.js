const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function responsive() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', responsive);

let gravity = 0.9;

const backgroundMusic = new Audio('./assets/sounds/gamemainSound.mp3');
backgroundMusic.pause();
backgroundMusic.loop = true;
backgroundMusic.volume = 0.4;

const jumpSound = new Audio('./assets/sounds/mario_jump2.wav');
jumpSound.volume = 0.5;

let run = './assets/character/playerCharacter/TransparentPNG/run/skeleton-run_'
let idle = './assets/character/playerCharacter/TransparentPNG/idle/skeleton-idle_'
let runback = './assets/character/playerCharacter/TransparentPNG/runback/skeleton-run_'
let die = './assets/character/playerCharacter/TransparentPNG/ko/skeleton-KO_'
let jump = './assets/character/playerCharacter/TransparentPNG/jump/skeleton-jump_'

var sprite = [];
let length = 20;
sprite.length = length;

sprite[0] = null;

for (var i = 0; i < sprite.length; i++) {
    sprite[i] = new Image();
    sprite[i].src = idle + i.toString() + '.png'
}

var i = 0;
let isJumping = false;

const interval = setInterval(() => {
    i++;
    if (i >= length) {
        i = 0;
    }
}, 40);


ctx.imageSmoothingEnabled = true;

let npcIdle = './assets/character/weapon_seller_NPC/frame'

var sprite2 = [];
let length2 = 7;
sprite2.length2 = length2;

sprite2[0] = null;

for (var n = 1; n < sprite2.length2; n++) {
    sprite2[n] = new Image();
    sprite2[n].src = npcIdle + n.toString() + '.png'
}

var n = 1;

const interval2 = setInterval(() => {
    n++;
    if (n >= length2) {
        n = 1;
    }
    

}, 100);
// 4800
class Npc {
    constructor() {
        this.position = {
            x: 4800,
            y: window.innerHeight + 6050
        }

        this.width = 180;
        this.height = 190;
    }

    draw() {
        ctx.drawImage(sprite2[n], this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
    }
}


const npc = new Npc()


class Player {
    constructor() {
        this.position = {
            x: 300,
            y: window.innerHeight - 400
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 80;
        this.height = 150;
    }

    draw() {
        ctx.drawImage(sprite[i], this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else if (this.velocity.y > 2) {
            dieFlag = true;
            this.velocity.y = 20;
            length = 30
        }

        this.draw();
    }


    jump() {
        if (!isJumping && this.velocity.y === 0) {
            this.velocity.y = -25;
        }
    }
}

const treeImage = new Image()
treeImage.src = './assets/asset/zombieworld/png/Objects/Tree.png'

class Tree {
    constructor({ x, y, treeImage, width, height }) {
        this.position = {
            x,
            y
        }
        this.treeImage = treeImage;
        this.width = width
        this.height = height
    }
    draw() {
        ctx.drawImage(this.treeImage, this.position.x, this.position.y, this.width, this.height)
    }
}

class Platform {
    constructor({ x, y, image, width, height }) {
        this.position = {
            x,
            y
        }

        this.image = image
        this.width = width
        this.height = height

    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class Trap {
    constructor({ x, y, trap, width, height }) {
        this.position = {
            x,
            y
        }

        this.trap = trap
        this.width = width
        this.height = height
    }

    draw() {
        ctx.drawImage(this.trap, this.position.x, this.position.y, this.width, this.height)
    }
}

class Desk {
    constructor({ x, y, desk, width, height, text }) {
        this.position = {
            x,
            y
        }

        this.desk = desk
        this.width = width
        this.height = height
        this.text = text
    }

    draw() {
        ctx.drawImage(this.desk, this.position.x, this.position.y, this.width, this.height)

        // Add the text to the canvas
        ctx.font = "20px Arial"
        ctx.fillStyle = "white"
        ctx.fillText(this.text, this.position.x + 10, this.position.y + 30)
    }
}

class Cafe {
    constructor({ x, y, cafe, width, height }) {
        this.position = {
            x,
            y
        }

        this.cafe = cafe
        this.width = width
        this.height = height
    }

    draw() {
        ctx.drawImage(this.cafe, this.position.x, this.position.y, this.width, this.height)
    }
}

class Sign {
    constructor({ x, y, sign, width, height, text }) {
        this.position = {
            x,
            y
        }

        this.text = text
        this.sign = sign
        this.width = width
        this.height = height
    }
    draw() {
        ctx.drawImage(this.sign, this.position.x, this.position.y, this.width, this.height)

        ctx.font = "15px Arial"
        ctx.fillStyle = "white"
        ctx.fillText(this.text, this.position.x + 7, this.position.y + 65)
    }
}

class Spinnersaw {
    constructor({ x, y, spinnerSaw, width, height }) {
        this.position = {
            x,
            y
        }

        this.spinnerSaw = spinnerSaw
        this.width = width
        this.height = height
    }

    draw() {
        ctx.save(); // save the current canvas state
        ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2); // move the canvas origin to the center of the Xinkali element
        ctx.rotate(angle); // rotate the canvas
        ctx.drawImage(this.spinnerSaw, -this.width / 2, -this.height / 2, this.width, this.height); // draw the Xinkali element centered at the origin
        ctx.restore(); // restore the canvas state
    }
}

class Bushes {
    constructor({ x, y, bush, width, height }) {
        this.position = {
            x,
            y
        }

        this.width = width
        this.height = height
        this.bush = bush
    }

    draw() {
        ctx.drawImage(this.bush, this.position.x, this.position.y, this.width, this.height)
    }
}

class Tavern {
    constructor({ x, y, tavern, width, height }) {
        this.position = {
            x,
            y
        }

        this.width = width
        this.height = height
        this.tavern = tavern
    }

    draw() {
        ctx.drawImage(this.tavern, this.position.x, this.position.y, this.width, this.height)
    }
}
class Door {
    constructor({ x, y, door, width, height }) {
        this.position = {
            x,
            y
        }

        this.width = width
        this.height = height
        this.door = door
    }

    draw() {
        ctx.fillStyle = 'red'
        ctx.drawImage(this.door, this.position.x, this.position.y, this.width, this.height)
    }
}



let angle = 2

const door = new Image()
door.src = ''

const tavern = new Image()
tavern.src = './assets/asset/houseAssets/Building/Untitled-2.png'

const bush = new Image()
bush.src = './assets/asset/zombieworld/png/Objects/Bush.png'

const spinnerSaw = new Image()
spinnerSaw.src = './assets/traps/Gameobstaclesandhazzards--1l51172s460r0n5l5t/pngs/rotating_blades/blade_3.png'

const sign = new Image()
sign.src = './assets/asset/houseAssets/Environment/Sign_03.png'

const cafe = new Image()
cafe.src = './assets/asset/houseAssets/Building/cafe.png'

const trap = new Image()
trap.src = './assets/traps/Gameobstaclesandhazzards--1l51172s460r0n5l5t/pngs/spikes/spikes_2.png'

const image = new Image()
image.src = "./assets/asset/zombieworld/png/Tiles/ground.png"

const desk = new Image()
desk.src = ''

const player = new Player()
const welcomeText = ''
const cafeText = 'უზის დუქანი'


//hidden doors
const doors = [
    new Door({ x: 4450, y: window.innerHeight - 197, door, width: 100, height: 100 }),
]

//bushes
const bushes = [
    new Bushes({ x: 450, y: window.innerHeight - 197, bush, width: 200, height: 100 })
]

//spinner
const spinners = [
    new Spinnersaw({ x: 2200, y: window.innerHeight - 100, spinnerSaw, width: 100, height: 100 }),
    new Spinnersaw({ x: 3900, y: window.innerHeight - 100, spinnerSaw, width: 100, height: 100 }),
]

//signs 
const signs = [
    new Sign({ x: 4360, y: window.innerHeight - 250, sign, width: 110, height: 120, text: cafeText }),
]

//tavern
const cafes = [new Cafe({ x: 4200, y: window.innerHeight - 596, cafe, width: 800, height: 500 })]

//tavern interior
const taverns = [new Tavern({ x: 4200, y: window.innerHeight + 6000, tavern, width: 800, height: 500 })]

//desks
const desks = [new Desk({ x: 600, y: window.innerHeight - 196, desk, width: 306, height: 100, text: welcomeText })]

// trees
const trees = [
    new Tree({ x: 300, y: window.innerHeight - 598, treeImage, width: 300, height: 500 }),
    new Tree({ x: 2000, y: window.innerHeight - 598, treeImage, width: 300, height: 500 }),
    new Tree({ x: 3500, y: window.innerHeight - 598, treeImage, width: 300, height: 500 }),
]

//traps
const traps = [
    new Trap({ x: 2400, y: window.innerHeight - 147, trap, width: 100, height: 50 }),
    new Trap({ x: 2500, y: window.innerHeight - 147, trap, width: 100, height: 50 }),
    new Trap({ x: 2300, y: window.innerHeight - 147, trap, width: 100, height: 50 }),
    new Trap({ x: 2600, y: window.innerHeight - 400, trap, width: 100, height: 50 }),
    new Trap({ x: 4000, y: window.innerHeight - 147, trap, width: 100, height: 50 }),
]

// platforms
const platforms = [
    new Platform({
        x: 0, y: window.innerHeight - player.height + 51, image, width: 700, height: 100
    })
    , new Platform({
        x: 700, y: window.innerHeight - player.height + 51, image, width: 700, height: 100
    })
    , new Platform({
        x: 1700, y: window.innerHeight - player.height + 51, image, width: 700, height: 100
    })
    , new Platform({
        x: 2400, y: window.innerHeight - player.height + 51, image, width: 700, height: 100
    })
    , new Platform({
        x: 2400, y: window.innerHeight - player.height - 200, image, width: 700, height: 100
    })
    , new Platform({
        x: 3500, y: window.innerHeight - player.height + 51, image, width: 700, height: 100
    })
    , new Platform({
        x: 4200, y: window.innerHeight - player.height + 51, image, width: 700, height: 100
    })
    , new Platform({
        x: 4900, y: window.innerHeight - player.height + 51, image, width: 700, height: 100
    })

]
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
player.update();

let offset = 0;
let dieFlag = false;

function updateTavern(tavern, { x, y, width, height }) {
    tavern.position.x = x
    tavern.position.y = y
    tavern.width = width
    tavern.height = height
}

function updatePlatform(platform, { x, y, width, height }) {
    platform.position.x = x
    platform.positiony = y
    platform.width = width
    platform.height = height
}

let lastFrameTime = 0;
let fps = 90;

function animate(currentTime) { 
    
    requestAnimationFrame(animate);

    const elapsed = currentTime - lastFrameTime;

    if (elapsed >= 1000 / fps) {
        console.log(fps)
        lastFrameTime = currentTime;

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        trees.forEach(tree => {
            tree.draw();
        })

        traps.forEach(trap => {
            if (player.position.x < trap.position.x + trap.width &&
                player.position.x + player.width > trap.position.x &&
                player.position.y < trap.position.y + trap.height &&
                player.position.y + player.height > trap.position.y) {
                dieFlag = true;
                length = 30;
            }
            trap.draw();
        })

        desks.forEach(desk => {
            desk.draw();
        })

        cafes.forEach(cafe => {
            cafe.draw();
        })

        signs.forEach(sign => {
            sign.draw();
        })
        spinners.forEach(spinnerSaw => {
            if (player.position.x < spinnerSaw.position.x + spinnerSaw.width &&
                player.position.x + player.width - 10 > spinnerSaw.position.x &&
                player.position.y < spinnerSaw.position.y + spinnerSaw.height &&
                player.position.y + player.height - 10 > spinnerSaw.position.y) {
                dieFlag = true;
            }
            else if (player.position.x < spinnerSaw.position.x + spinnerSaw.width &&
                player.position.x + player.width + 100 > spinnerSaw.position.x &&
                player.position.y < spinnerSaw.position.y + spinnerSaw.height &&
                player.position.y + player.height + 100 > spinnerSaw.position.y) {
                spinnerSaw.position.y = window.innerHeight - 150;
            }

            spinnerSaw.draw();
        })
        platforms.forEach(platform => {
            platform.draw();
        })

        bushes.forEach(bush => {
            bush.draw();
        })
        taverns.forEach(tavern => {
            tavern.draw();
        })
        const myTavern = taverns[0]
        const tavern = cafes[0]
        const platformWidth = platforms[0]
        const doorTavern = doors[0]

        const transition = document.getElementById('transition')

        doors.forEach(door => {
            let hasEnteredTavern = false;
            if (player.position.x < door.position.x + door.width &&
                player.position.x + player.width - 10 > door.position.x &&
                player.position.y < door.position.y + door.height &&
                player.position.y + player.height - 10 > door.position.y) {
                if (!hasEnteredTavern) {
                    hasEnteredTavern = true;
                    transition.style.display = "flex"

                    setTimeout(() => {
                        transition.classList.add('animated')
                    }, 50);

                    setTimeout(() => {
                        updateTavern(myTavern, { x: tavern.position.x, y: window.innerHeight - platformWidth.width + 30, width: 1000, height: 600 })
                        doorTavern.position.y = window.innerHeight + 1000;
                        console.log(player.position.y + "player", npc.position.y + "npc")
                        npc.position.y = window.innerHeight - 280;
                        offset = 0;
                        player.velocity.x = 0;
                        player.position.x < tavern.width
                    }, 700);
                    setTimeout(() => {
                        transition.classList.remove('animated')
                    }, 900);
                    setTimeout(() => {
                        transition.style.display = "none";
                    }, 1000);
                }
            }

            door.draw();

        })
        if (keys.right.pressed && player.position.x < 50) {
            player.velocity.x = 0;
        } else if ((keys.left.pressed && player.position.x > 50) || keys.left.pressed && offset === 0 && player.position.x > 0) {
            player.velocity.x = 0;
        } else {
            player.velocity.x = 0;
        }

        if (keys.right.pressed && offset < 3000) {
            offset += 5;
            //npc move
            npc.position.x -= 7;
            //platforms move
            platforms.forEach(platform => {
                platform.position.x -= 7;
            })
            //trees move
            trees.forEach(tree => {
                tree.position.x -= 7;
            })
            //traps move
            traps.forEach(trap => {
                trap.position.x -= 7;
            })
            //desks move
            desks.forEach(desk => {
                desk.position.x -= 7;
            })
            //cafe move
            cafes.forEach(cafe => {
                cafe.position.x -= 7;
            })
            //signs move
            signs.forEach(sign => {
                sign.position.x -= 7
            })
            //spinner move
            spinners.forEach(spinnerSaw => {
                spinnerSaw.position.x -= 7
            })

            // bush move
            bushes.forEach(bush => {
                bush.position.x -= 7
            })
            //tavern move
            taverns.forEach(tavern => {
                tavern.position.x -= 7
            })
            //door move
            doors.forEach(door => {
                door.position.x -= 7
            })


        } else if (keys.left.pressed && offset > 0) {
            offset -= 5;
            //npc move
            npc.position.x += 7;
            //move back
            platforms.forEach(platform => {
                platform.position.x += 7;
            })
            trees.forEach(tree => {
                tree.position.x += 7;
            })
            traps.forEach(trap => {
                trap.position.x += 7;
            })
            desks.forEach(desk => {
                desk.position.x += 7;
            })
            cafes.forEach(cafe => {
                cafe.position.x += 7;
            })
            signs.forEach(sign => {
                sign.position.x += 7
            })
            spinners.forEach(spinnerSaw => {
                spinnerSaw.position.x += 7
            })
            bushes.forEach(bush => {
                bush.position.x += 7
            })
            taverns.forEach(tavern => {
                tavern.position.x += 7
            })
            doors.forEach(door => {
                door.position.x += 7
            })
        }

        angle += 1

        npc.update();
        player.update();

        platforms.forEach((platform) => {
            if (player.position.y + player.height <= platform.position.y
                && player.position.y + player.height + player.velocity.y >= platform.position.y
                && player.position.x + player.width >= platform.position.x
                && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            }

        })
    }
}
requestAnimationFrame(animate)

let isOpened = false;

const menu = document.getElementById('section1');
const buttonX = document.getElementById('xButton');
function clicked() {
    buttonX.addEventListener('click', () => {
        menu.style.display = "none"
    })
}


function npcClick() {
    if (player.position.x < npc.position.x + npc.width &&
        player.position.x + player.width > npc.position.x &&
        player.position.y < npc.position.y + npc.height &&
        player.position.y + player.height > npc.position.y &&
        isOpened == false) {
        addEventListener('keydown', ({ keyCode }) => {
            switch (keyCode) {
                case 69:
                    isOpened = true;
                    menu.style.display = "flex";
                    break;
            }
        })

    } else if (isOpened) {
        console.log('asdasd')
        clicked();
        addEventListener('keydown', ({ keyCode }) => {
            switch (keyCode) {
                case 69:
                    isOpened = false;
                    menu.style.display = "none";
                    break;
            }
        })
    }
    requestAnimationFrame(npcClick)
}

npcClick();

//dead cant move and animations
function diedCantMove() {
    if (dieFlag) {
        keys.right.pressed = false;
        keys.left.pressed = false;
        addEventListener('keydown', ({ keyCode }) => {
            switch (keyCode) {
                case 68:
                    keys.right.pressed = false;
                    for (var i = 0; i < sprite.length; i++) {
                        sprite[i] = new Image();
                        sprite[i].src = die + i.toString() + '.png'
                    }
                    break;
                case 65:
                    for (var i = 0; i < sprite.length; i++) {
                        sprite[i] = new Image();
                        sprite[i].src = die + i.toString() + '.png'
                    }
                    keys.left.pressed = false;
                    break;
            }
        })

        gravity = 4
        player.velocity.y = 4

        sprite[i] = new Image();
        sprite[i].src = die + 30 + '.png'

        length = 1;
        i = length;
    }


    requestAnimationFrame(diedCantMove)
}

diedCantMove();

//key press movement jump and animations
function testing() {
    if (!dieFlag) {
        addEventListener('keydown', ({ keyCode }) => {
            switch (keyCode) {
                case 65:
                    console.log('left')
                    keys.left.pressed = true;
                    for (var i = 0; i < sprite.length; i++) {
                        sprite[i] = new Image();
                        sprite[i].src = runback + i.toString() + '.png'
                    }
                    break;
                case 83:
                    console.log('down')
                    break;
                case 68:
                    keys.right.pressed = true;
                    for (var i = 0; i < sprite.length; i++) {
                        sprite[i] = new Image();
                        sprite[i].src = run + i.toString() + '.png'
                    }
                    break;
                case 87:
                    if (player.velocity.y === 0) {
                        player.jump();
                    }
                    break;
            }
        })

        addEventListener('keyup', ({ keyCode }) => {
            switch (keyCode) {
                case 65:
                    console.log('left')
                    keys.left.pressed = false;
                    for (var i = 0; i < sprite.length; i++) {
                        sprite[i] = new Image();
                        sprite[i].src = idle + i.toString() + '.png'
                    }
                    break;
                case 83:
                    console.log('asdasd')
                    break;
                case 68:
                    console.log('right')
                    keys.right.pressed = false;
                    for (var i = 0; i < sprite.length; i++) {
                        sprite[i] = new Image();
                        sprite[i].src = idle + i.toString() + '.png'
                    }
                    break;
                case 87:

                    break;
            }
        })

    }
}


testing();

