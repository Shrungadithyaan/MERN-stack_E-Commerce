const stripe = require('../../config/stripe')
const userModel = require('../../models/userModel')

const paymentController = async(request,response)=>{
    try{
        const { cartItems} = request.body
        // console.log("cartItems",cartItems)
        // console.log("Request User ID:", request.userId);

        const user = await userModel.findOne({_id : request.userId})
        // console.log("Retrieved User:", user);
        const params = {
            submit_type : "pay",
            mode : "payment",
            payment_method_types : ["card"],
            billing_address_collection : "auto",
            shipping_options :[ {
                shipping_rate  : 'shr_1QxJ40CKVHuH26ofz5jpe3Mh'
            }],
            customer_email : user.email,
            metadata : {
                userId : request.userId
            },
            line_items : cartItems.map((item,index) => {
                return {
                    price_data : {
                        currency : 'inr',
                        product_data : {
                            name : item.productId.productName,
                            images : item.productId.productImage,
                            metadata : {
                                productID : item.productId._id,
                            }
                        },
                        unit_amount : item.productId.sellingPrice * 100
                    },
                    adjustable_quantity : {
                        enabled : true,
                        minimum : 1,
                        
                    },
                    quantity : item.quantity
                  
                }
            }),
            success_url : `${process.env.FRONTEND_URL}/success`,
            cancel_url : `${process.env.FRONTEND_URL}/cancel`
        }
        const session = await stripe.checkout.sessions.create(params)

        response.status(303).json(session)

    }catch(error){
        response.json({
            message : error?.message || error,
            success : false,
            error : true
        })
    }
}


module.exports = paymentController