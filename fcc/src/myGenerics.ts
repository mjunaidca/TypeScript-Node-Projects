const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products: T[]):T{
    // do some database operations
    const myIndex = 3
    return products[3]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Databse {
    connection: string,
    username: string,
    password: string
}

function anotherFunctin<T, U extends Databse>(valOne:T, valTow:U):object{
    return {
        valOne,
        valTow
    }
}

// anotherFunctin(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}