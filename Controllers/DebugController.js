
var debug = [""]

module.exports = {
    
    async debug(request, response) {

        debug.push(request.debug)

        return response.status(200)
    },

    async listDebug(request, response) {

        return response.json(debug)
    }
}