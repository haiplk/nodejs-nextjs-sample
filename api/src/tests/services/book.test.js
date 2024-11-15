"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookService_1 = require("../../src/services/bookService");
const bookRepository = __importStar(require("../../src/repositories/bookRepository"));
const bookMappers_1 = require("../../src/mappers/bookMappers");
// Mocking the dependencies
jest.mock('../repositories/bookRepository');
jest.mock('../mappers/bookMappers');
describe('bookService', () => {
    const mockBook = { id: '1', title: 'Mock Book', author: 'Author' };
    const mockRequest = { title: 'New Book', author: 'Author' };
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('createBook', () => {
        it('should create a book and map it to a response', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            bookRepository.createBook.mockResolvedValue(mockBook);
            bookMappers_1.mapBookToResponse.mockReturnValue(mockBook);
            // Act
            const result = yield (0, bookService_1.createBook)(mockRequest);
            // Assert
            expect(bookRepository.createBook).toHaveBeenCalledWith(mockRequest);
            expect(bookMappers_1.mapBookToResponse).toHaveBeenCalledWith(mockBook);
            expect(result).toEqual(mockBook);
        }));
    });
    describe('updateBook', () => {
        it('should update a book and return the mapped response if the book exists', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const bookId = '1';
            bookRepository.updateBook.mockResolvedValue(mockBook);
            bookMappers_1.mapBookToResponse.mockReturnValue(mockBook);
            // Act
            const result = yield (0, bookService_1.updateBook)(bookId, mockRequest);
            // Assert
            expect(bookRepository.updateBook).toHaveBeenCalledWith(bookId, mockRequest);
            expect(bookMappers_1.mapBookToResponse).toHaveBeenCalledWith(mockBook);
            expect(result).toEqual(mockBook);
        }));
        it('should return null if the book does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const bookId = '2';
            bookRepository.updateBook.mockResolvedValue(null);
            // Act
            const result = yield (0, bookService_1.updateBook)(bookId, mockRequest);
            // Assert
            expect(bookRepository.updateBook).toHaveBeenCalledWith(bookId, mockRequest);
            expect(result).toBeNull();
        }));
    });
    describe('getBooks', () => {
        it('should retrieve all books and map them to responses', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockBooks = [mockBook];
            bookRepository.getBooks.mockResolvedValue(mockBooks);
            bookMappers_1.mapBooksToResponse.mockReturnValue(mockBooks);
            // Act
            const result = yield (0, bookService_1.getBooks)();
            // Assert
            expect(bookRepository.getBooks).toHaveBeenCalled();
            expect(bookMappers_1.mapBooksToResponse).toHaveBeenCalledWith(mockBooks);
            expect(result).toEqual(mockBooks);
        }));
    });
    describe('getBook', () => {
        it('should retrieve a book by id and map it to a response if the book exists', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const bookId = '1';
            bookRepository.getBook.mockResolvedValue(mockBook);
            bookMappers_1.mapBookToResponse.mockReturnValue(mockBook);
            // Act
            const result = yield (0, bookService_1.getBook)(bookId);
            // Assert
            expect(bookRepository.getBook).toHaveBeenCalledWith(bookId);
            expect(bookMappers_1.mapBookToResponse).toHaveBeenCalledWith(mockBook);
            expect(result).toEqual(mockBook);
        }));
        it('should return null if the book does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const bookId = '2';
            bookRepository.getBook.mockResolvedValue(null);
            // Act
            const result = yield (0, bookService_1.getBook)(bookId);
            // Assert
            expect(bookRepository.getBook).toHaveBeenCalledWith(bookId);
            expect(result).toBeNull();
        }));
    });
    describe('deleteBook', () => {
        it('should delete a book by id and return true if successful', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const bookId = '1';
            bookRepository.deleteBook.mockResolvedValue(true);
            // Act
            const result = yield (0, bookService_1.deleteBook)(bookId);
            // Assert
            expect(bookRepository.deleteBook).toHaveBeenCalledWith(bookId);
            expect(result).toBe(true);
        }));
        it('should return false if the book does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const bookId = '2';
            bookRepository.deleteBook.mockResolvedValue(false);
            // Act
            const result = yield (0, bookService_1.deleteBook)(bookId);
            // Assert
            expect(bookRepository.deleteBook).toHaveBeenCalledWith(bookId);
            expect(result).toBe(false);
        }));
    });
});
