import {greet} from './greet'

xdescribe('greet', () => {
    
    it('should include name in return message', () => {
        expect(greet('Angular')).toContain('Angular')
    })
    
})
