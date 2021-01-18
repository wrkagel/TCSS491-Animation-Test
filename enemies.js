// JavaScript source code
class squall {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.game.squall = this;

		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/FFVIIISprites.png");

	};

	update() {
		if (this.game.left) {
			this.x -= 5;
		}
		if (this.game.right) {
			this.x += 5;
		}
	};

	draw(ctx) {
		ctx.drawImage(this.sprite, this.x, this.y);
	}

};
