export const useApi = () => {
    const baseURL = 'https://dummyjson.com'

    const fetchProducts = async (limit = 30, skip = 0) => {
        try {
            const response = await $fetch(`${baseURL}/products`, {
                params: { limit, skip }
            })
            return response
        } catch (error) {
            console.error('Error fetching products:', error)
            throw error
        }
    }

    const fetchProductById = async (id) => {
        try {
            const response = await $fetch(`${baseURL}/products/${id}`)
            return response
        } catch (error) {
            console.error('Error fetching product:', error)
            throw error
        }
    }

    const searchProducts = async (query) => {
        try {
            const response = await $fetch(`${baseURL}/products/search`, {
                params: { q: query }
            })
            return response
        } catch (error) {
            console.error('Error searching products:', error)
            throw error
        }
    }

    return {
        fetchProducts,
        fetchProductById,
        searchProducts
    }
}