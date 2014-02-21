describe('Rect', function()
{
	it('can be created', function()
	{
		r = new Rect(10, 20, 40, 30)
		expect(r).toBeDefined()
	})

	describe('when created', function()
	{
		var r

		beforeEach(function()
		{
			r = new Rect(10, 20, 40, 30)
		})

		it('has the correct value of `x`', function()
		{
			expect(r.x).toBe(10)
		})

		it('has the correct value of `y`', function()
		{
			expect(r.y).toBe(20)
		})

		it('has the correct value of `width`', function()
		{
			expect(r.width).toBe(40)
		})

		it('has the correct value of `height`', function()
		{
			expect(r.height).toBe(30)
		})
	})
})
