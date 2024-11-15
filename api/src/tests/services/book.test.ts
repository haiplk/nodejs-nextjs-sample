import { createBook, updateBook, getBooks, getBook, deleteBook } from '../../services/bookService'
import * as bookRepository from '../../repositories/bookRepository';
import { mapBooksToResponse, mapBookToResponse } from '../../mappers/bookMappers';
import { BookRequest, BookResponse } from "../../types/bookType";

// Mocking the dependencies
jest.mock('../repositories/bookRepository');
jest.mock('../mappers/bookMappers');

describe('bookService', () => {
    const mockBook = { id: '1', title: 'Mock Book', author: 'Author' };
    const mockRequest: BookRequest = { title: 'New Book', author: 'Author' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('createBook', () => {
        it('should create a book and map it to a response', async () => {
            // Arrange
            (bookRepository.createBook as jest.Mock).mockResolvedValue(mockBook);
            (mapBookToResponse as jest.Mock).mockReturnValue(mockBook);

            // Act
            const result = await createBook(mockRequest);

            // Assert
            expect(bookRepository.createBook).toHaveBeenCalledWith(mockRequest);
            expect(mapBookToResponse).toHaveBeenCalledWith(mockBook);
            expect(result).toEqual(mockBook);
        });
    });

    describe('updateBook', () => {
        it('should update a book and return the mapped response if the book exists', async () => {
            // Arrange
            const bookId = '1';
            (bookRepository.updateBook as jest.Mock).mockResolvedValue(mockBook);
            (mapBookToResponse as jest.Mock).mockReturnValue(mockBook);

            // Act
            const result = await updateBook(bookId, mockRequest);

            // Assert
            expect(bookRepository.updateBook).toHaveBeenCalledWith(bookId, mockRequest);
            expect(mapBookToResponse).toHaveBeenCalledWith(mockBook);
            expect(result).toEqual(mockBook);
        });

        it('should return null if the book does not exist', async () => {
            // Arrange
            const bookId = '2';
            (bookRepository.updateBook as jest.Mock).mockResolvedValue(null);

            // Act
            const result = await updateBook(bookId, mockRequest);

            // Assert
            expect(bookRepository.updateBook).toHaveBeenCalledWith(bookId, mockRequest);
            expect(result).toBeNull();
        });
    });

    describe('getBooks', () => {
        it('should retrieve all books and map them to responses', async () => {
            // Arrange
            const mockBooks = [mockBook];
            (bookRepository.getBooks as jest.Mock).mockResolvedValue(mockBooks);
            (mapBooksToResponse as jest.Mock).mockReturnValue(mockBooks);

            // Act
            const result = await getBooks();

            // Assert
            expect(bookRepository.getBooks).toHaveBeenCalled();
            expect(mapBooksToResponse).toHaveBeenCalledWith(mockBooks);
            expect(result).toEqual(mockBooks);
        });
    });

    describe('getBook', () => {
        it('should retrieve a book by id and map it to a response if the book exists', async () => {
            // Arrange
            const bookId = '1';
            (bookRepository.getBook as jest.Mock).mockResolvedValue(mockBook);
            (mapBookToResponse as jest.Mock).mockReturnValue(mockBook);

            // Act
            const result = await getBook(bookId);

            // Assert
            expect(bookRepository.getBook).toHaveBeenCalledWith(bookId);
            expect(mapBookToResponse).toHaveBeenCalledWith(mockBook);
            expect(result).toEqual(mockBook);
        });

        it('should return null if the book does not exist', async () => {
            // Arrange
            const bookId = '2';
            (bookRepository.getBook as jest.Mock).mockResolvedValue(null);

            // Act
            const result = await getBook(bookId);

            // Assert
            expect(bookRepository.getBook).toHaveBeenCalledWith(bookId);
            expect(result).toBeNull();
        });
    });

    describe('deleteBook', () => {
        it('should delete a book by id and return true if successful', async () => {
            // Arrange
            const bookId = '1';
            (bookRepository.deleteBook as jest.Mock).mockResolvedValue(true);

            // Act
            const result = await deleteBook(bookId);

            // Assert
            expect(bookRepository.deleteBook).toHaveBeenCalledWith(bookId);
            expect(result).toBe(true);
        });

        it('should return false if the book does not exist', async () => {
            // Arrange
            const bookId = '2';
            (bookRepository.deleteBook as jest.Mock).mockResolvedValue(false);

            // Act
            const result = await deleteBook(bookId);

            // Assert
            expect(bookRepository.deleteBook).toHaveBeenCalledWith(bookId);
            expect(result).toBe(false);
        });
    });
});
