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
		if (this.left) {
			this.flip = false;
			if (this.down) {
				this.direction = 1
			} else if (this.up) {
				this.direction = 3
			} else {
				this.direction = 2
			}
		} else if (this.right) {
			this.flip = true;
			if (this.down) {
				this.direction = 1
			} else if (this.up) {
				this.direction = 3
			} else {
				this.direction = 2
			}
		} else if (this.down) {
			this.direction = 0
		} else if (this.up) {
			this.direction = 4;
		}
		switch (this.direction) {
			case 0:
				this.y += 5;
				break;
			case 1:
				if (flip) {
					this.x += 3;
				} else {
					this.x -= 3;
				}
				this.y += 3;
				break;
			case 2:
				if (flip) {
					this.x += 5;
				} else {
					this.x -= 5;
				}
				break;
			case 3:
				if (flip) {
					this.x += 3;
				} else {
					this.x -= 3;
				}
				this.y -= 3;
				break;
			case 4:
				this.y -= 5;
				break;
		}
	};

	draw(ctx) {
		this.animations[this.direction].drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y, 3);
	}

};
