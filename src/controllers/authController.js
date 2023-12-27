const authService = require('../services/authService')

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body)
        res.json({ success: true, user })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body)
        res.json({ success: true, token })
    } catch (error) {
        res.status(401).json({ success: false, error: error.message })
    }
}
