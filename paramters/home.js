export const singin = {
    address: { type: 'string', required: true, example: '5GsM73jBMKTgQaFLqdyvAy3wZAD7wFCx6RQvpMoFuQW6cSP7', description: 'address' },
    message: { type: 'string', required: true, example: 'Sign-in request for address 5GsM73jBMKTgQaFLqdyvAy3wZAD7wFCx6RQvpMoFuQW6cSP7.', description: 'message' },
    signature: { type: 'string', required: true, example: '0x7ec69c1f4b4a1ebce67b2c576f4499df86d4b7baea93ba6306e5fc4dad804c7bd2271bfc0023ca5d6cd3e433b02ae3b3df25abf25c6761950698e2dc6aef7083', description: 'signature' }
}