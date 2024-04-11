import { describe, it, beforeAll, afterAll } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../app/page'
 
describe('<App/>', () => {
    beforeAll(() => {
        render(<App/>)
    })
    afterAll(cleanup)

    it('should be render the statusBar', () => {
        screen.getByText('Status:')
        screen.getByText('Transport:')
    })

    it('should be render the MainImage', () => {
        screen.getByText('Press')
        screen.getByText('Start')
    })

    it('should render Action button', () => {
        screen.getByText('Start') 
        screen.getByText('Clear')
        screen.getByText('Add to Favorites')
    })
})