'use server'

const getProducts = async()=>{
    const result = await fetch(`${process.env.BACKEND_URL}/api/v1/products`)
}