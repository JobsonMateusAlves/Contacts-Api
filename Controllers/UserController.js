const User = require('../Models/User');
const Invalidate = require('../Models/InvalidToken');
const jwt = require('../Setup/jwt')
const Cryptography = require('../Generic/Cryptography')


module.exports = {

    async signup(request, response) {
        
        try {
            const result = await User.create(request.body)
            const { password, ...user } = result.toObject()

            const token = jwt.sign({ user: user._id })
            
            return response.json({ user, token })

        } catch (error) {
            return response.status(400).json({message: "Usuário já cadastrado."})
        }
    },
    
    async login(request, response) {
        const { email, password } = request.body

        const currentPassword = Cryptography.encrypt(password)

        try {
            const result = await User.findOne({ email })

            if (!result || currentPassword != result.password) {
                return response.status(401).json({message: "Email e/ou senha incorretos"})
            }
            
            const { _, ...user } = result.toObject()
            
            const token = jwt.sign({ user: user._id })

            return response.json({ user, token })
        } catch (error) {

            return response.status(400).json({message: "Algo deu errado"})
        }
    },

    async logout(request, response) {

        const stringToken = request.headers.token

        try {

            const _ = await Invalidate.create({ stringToken: stringToken})
        
            return response.status(200).send()

        } catch (error) {
            
            return response.status(401).json({message: "Você precisa estar logado para executar esta ação."})
        }
    },


    async authenticatorMiddlewate(request, response, next) {
        const token = request.headers.token

        if (!token) {
            return response.status(401).json({message: "Você precisa estar logado para executar esta ação."})
        }

        try {
            const invalidToken = await Invalidate.findOne({stringToken: token})

            if (invalidToken) {
                return response.status(401).json({message: "Você precisa estar logado para executar esta ação."})
            }

        } catch (error) {
            
            console.log(error)
        }
        
        try {
            const payload = jwt.verify(token);
            
            const user = await User.findById(payload.user);
            
            if (!user) {
                return response.status(401).json({message: "Você precisa estar logado para executar esta ação."})
            }

            request.id = payload.user

            next()

        } catch (error) {
            console.log("authenticatorMiddlewate")
            return response.status(400).json({message: "Algo deu errado."})
        }
    }
}