import Game from './Game'

it("should generate a number between 1 and 100",() => {
	const game = new Game()
	expect(game.attempts).toBe(0)
})

it("should display AIm lower",() => {
	const game = new Game()
	game.target = 65
	game.play(70)

	expect(game.message).toBe("Aim Lower")
})

it("should have correct attempts",() => {
	const game = new Game()
	game.target = 65
	game.play(50)
	game.play(60)
	game.play(70)
	expect(game.attempts).toBe(3)
})

it("should generate a number between 1 and 100",() => {
	const game = new Game()
	game.target = 65
	game.play(50)
	expect(game.message).toBe("Aim Higher")
})