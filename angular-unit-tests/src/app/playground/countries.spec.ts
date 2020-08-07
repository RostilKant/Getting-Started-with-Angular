import {countries} from './countries'

xdescribe('countries', () => {
    
    it('should contain countries codes', () => {
        const result = countries()
        
        expect(result).toContain('US')
        expect(result).toContain('UA')
        expect(result).toContain('FR')
        expect(result).toContain('DE')
        expect(result).toContain('AU')
        expect(result).toContain('GB')
    })
    
})
