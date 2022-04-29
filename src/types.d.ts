export type Expression = {
    id: string
    text: string
}
export type Intent = {
    id: string
    name: string
    description: string
    trainingData: {
        expressionCount: number
        expressions: Expression[]
    }
}