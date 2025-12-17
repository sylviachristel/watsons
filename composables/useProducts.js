export const useProducts = () => {
    const products = ref([])
    const loading = ref(false)
    const error = ref(null)

    // Watsons product templates to preserve design
    const productTemplates = [
        {
            title: 'Herbal Science Boom<br/>Butter Hair Care Oil 300 ml',
            price: '44,95 TL',
            image: '/images/boom-butter.png'
        },
        {
            title: 'Diadermine Lift + Serum<br/>Booster Vitamin C',
            price: '42,25 TL',
            image: '/images/diadermine-serum.png'
        },
        {
            title: 'Ashley Joy Strengthening<br/>Shampoo 400ml',
            price: '29,45 TL',
            image: '/images/ashley-joy-shampoo.png'
        },
        {
            title: 'Herbal Extract Refreshing<br/>Shampoo 400ml',
            price: '28,95 TL',
            image: '/images/herbal-extract-shampoo.png'
        }
    ]

    const loadProducts = async (limit = 4) => {
        loading.value = true
        error.value = null
        try {
            // Use dummyjson.com API to get featured products
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}`)
            if (!response.ok) throw new Error('API Error')

            const data = await response.json()

            // Map API results to Watsons templates to maintain design
            products.value = data.products.map((product, index) => {
                const template = productTemplates[index % productTemplates.length]
                return {
                    ...product, // Keep ID and other API fields
                    title: template.title,
                    price: template.price,
                    image: template.image,
                    // Keep the mapped image as the thumbnail/image used in component
                    thumbnail: template.image
                }
            })
        } catch (e) {
            error.value = 'An error occurred while loading products. Please try again.'
            console.error(e)
        } finally {
            loading.value = false
        }
    }

    return {
        products,
        loading,
        error,
        loadProducts
    }
}