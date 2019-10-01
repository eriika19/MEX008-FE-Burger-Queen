import React from 'react'

const OrderContext = React.createContext({
    client:{
        name:'',
        order:''
    },
})

export const OrderProvider = OrderContext.Provider
export const OrderConsumer = OrderContext.Consumer
export default OrderContext
