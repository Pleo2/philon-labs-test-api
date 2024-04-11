import {  describe, it, afterAll } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import StatusBar from '../components/StatusBar/index'
 
describe('<StatusBar/>', () => {
    afterAll(cleanup)

    it('should be render the statusBar if connected', () => {
        render(<StatusBar isConnected={true} transport='Websocket'/>)
        screen.getByText('connected')
        screen.getByText('Websocket')
    })
})