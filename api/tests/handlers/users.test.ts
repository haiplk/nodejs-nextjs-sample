import { getUsers } from "../../src/handlers/users"
import { Request, Response } from "express-serve-static-core"


describe('getUsers', () => {
    it('should return list of users', () => {
        // Assign
        const mockResponse = {
            send: jest.fn()
        } as unknown as Response;

        // Action
        getUsers({} as Request, mockResponse)

        // Assert
        expect(mockResponse.send).toHaveBeenCalledWith([]);
    })
})