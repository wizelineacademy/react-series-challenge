import mockResponse from './mockApiResponse';

export default {
    get: jest.fn(() => {
        return Promise.resolve({ data: { data: mockResponse.data } });
    }),
};