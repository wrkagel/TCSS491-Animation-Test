// JavaScript source code
class charrepo {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.game.charrepo = this;

		this.sprite = ASSET_MANAGER.getAsset("./Charrepo1.png");
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
