export const getClientToken=()=>
{
    return fetch('http://localhost:5000/api/v1/product/braintree/token',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>response.json())
    .catch(err=>console.log(err))
}

export const makePayment= async (data)=>
{
    return fetch('http://localhost:5000/api/v1/product/braintree/payment',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(data)
    }).then(response=>response.json())
    .catch(err=>console.log(err))
}