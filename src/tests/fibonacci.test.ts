function fibonacci() {
    return 0
}

describe('The fibonacci sequence', () => {
    it('yields value zero to number zero', () => {
        expect(fibonacci()).toBe(0)
    })
    it('yields value one to number one', () => {
        expect(fibonacci()).toBe(1)
    })
})
