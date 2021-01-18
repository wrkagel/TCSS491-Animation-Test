// JavaScript source code
class egg1 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.game.egg1 = this;

		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/eggs.png");
		this.direction = 0; //0: down, 1: downleft, 2: left, 3: upleft, 4: up
		this.flip = false; //Tells whether to flip left and right for the animation. Should always be false for down and up.
		this.animations = [];
		this.loadanimations();
	};

	loadanimations() {
		//Eight walking directions. Three are flips of the others.
		for (var i = 0; i < 5; i++) {
			this.animations.push([]);
		}

		this.animations[0] = new Animator(this.spritesheet, 8, 7, params.WIDTH, params.HEIGHT, 7, 0.095, 1, false, true);
		this.animations[1] = new Animator(this.spritesheet, 8, 40, params.WIDTH, params.HEIGHT, 7, 0.095, 1, false, true);
		this.animations[2] = new Animator(this.spritesheet, 7, 73, params.WIDTH, params.HEIGHT, 7, 0.095, 1, false, true);
		this.animations[3] = new Animator(this.spritesheet, 9, 106, params.WIDTH, params.HEIGHT, 7, 0.095, 1, false, true);
		this.animations[4] = new Animator(this.spritesheet, 7, 139, params.WIDTH, params.HEIGHT, 7, 0.095, 1, false, true);
	}

	update() {
		if (this.game.left) {
			this.x -= 5;
			this.left = true;
		}
		if (this.game.right) {
			this.x += 5;
			this.right = true;
		}
		if (this.game.up) {
			this.y -= 5;
			this.up = true;
		}
		if (this.game.down) {
			this.y += 5;
			this.down = true;
		}
	};

	draw(ctx) {
		this.animations[4].drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y, 3);
	}

};
