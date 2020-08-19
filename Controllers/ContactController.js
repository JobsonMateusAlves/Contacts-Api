const Contact = require('../Models/Contact');

module.exports = {
    
    async index(request, response) {

        try {
            contacts = (await Contact.find({ "userId": request.id }))

            return response.json(contacts)

        } catch (error) {
            console.log("index - Contacts")
            return response.status(400).json({message: "Algo deu errado."})
        }
    },

    async show(request, response) {

        try {
            contact = await Contact.findOne({ "userId": request.id, "_id": request.params.id })

            if (contact) {
                return response.json(contact)
            }
        
            return response.status(404).json({message: "Contato não encontrado"})

        } catch (error) {
            console.log("show - Contacts")
            return response.status(400).json({message: "Algo deu errado."})
        }
    },

    async store(request, response) {

        try {
            contact = await Contact.create({userId: request.id, ...request.body})
            
            return response.json(contact)
        } catch (error) {
            console.log("store - Contacts")
            return response.status(400).json({message: "Algo deu errado."})
        }
    },

    async put(request, response) {

        try {
            
            contact = await Contact.findByIdAndUpdate(request.params.id, {userId: request.id, ...request.body},  { new: true })

            // console.log({userId: request.id, ...request.body})
            

            if (contact) {
                return response.json(contact)
            }
        
            return response.status(404).json({message: "Contato não encontrado"})
            
        } catch (error) {

            console.log("put - Contacts")
            console.log(error)
            return response.status(400).json({message: "Algo deu errado."})
        }
    },

    async delete(request, response) {

        try {
            contact = await Contact.findOneAndDelete({ "userId": request.id, "_id": request.params.id })
        
            if (contact) {
                return response.json(contact)
            }
        
            return response.status(404).json({message: "Contato não encontrado"})
            
        } catch (error) {
            console.log("delete - Contacts")
            return response.status(400).json({message: "Algo deu errado."})
        }
    }
}