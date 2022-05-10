export const required = (value) => {
    if(value) return undefined

    return "Value is required"
}

export const maxLengthCreator = (max) => (value) => value && value.length > max ? `Max length ${max}` : undefined;

export const maxLengthCreator10 = maxLengthCreator(100);