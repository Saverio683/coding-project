import { describe, it, expect } from '@jest/globals'
import request from 'supertest'
import app from './app'

describe('Server', () => {
    it('should start and listen on the specified port', async () => {
        const response = await request(app).get('/countries/all') // 
        expect(response.status).toBe(200) // Checking status code
    
        const response2 = await request(app).get('/countries/find/ireland') 
        expect(response2.status).toBe(200)

        const response3 = await request(app).get('/countries/find/fadgafdf') 
        expect(response3.status).toBe(404)        
    })
})
