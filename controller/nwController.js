const axios_instance = require('../middleware/axiosinstance')

exports.getSupplierDetails = async(req, res) => {
    console.log("*** getSupplierDetails ***");
    try {
        const result = await axios_instance.get('Products', {
            params: {
                '$expand':`Supplier`
            }
        });
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(JSON.stringify(result.data.value))    
    } catch (error) {
        res.status(400)
    }
}

exports.getProducts = async(req, res) => {
    console.log("*** getProducts ***");
    try {
        const result = await axios_instance.get('/Products');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(result.data.value))    
    } catch (error) {
        res.status(400)
    }
}

exports.filterByPropery = async(req, res) => {
    console.log("*** filterByPropery ***");
    const ID = req.params.id;
    const fieldID = ID.match(/\S+(?==)/g)
    console.log("fieldID:" +fieldID);
    const value = ID.split('=').pop()
    console.log("value:" +value);  

    try {
        const result = await axios_instance.get('/Products', {
            params: {
                '$filter': `${fieldID} eq ${value}`
            }
        });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(result.data.value))    
    } catch (error) {
        res.status(400)
    }
}

