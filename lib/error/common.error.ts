export const CommonInputError = class extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
};

export const CommonUnauthenticatedError = class extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
};

export const CommonUnauthorizedError = class extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
};
