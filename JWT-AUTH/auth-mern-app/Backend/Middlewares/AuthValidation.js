import joi from "joi"

const signupValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(12).required(),
    })

    const { error } = schema.validate(req.body)

    if (error) {
        return res.status(400)
            .json({ message: "bad request", error })
    }

    next();
}

const LoginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(12).required(),
    })

    const { error } = schema.validate(req.body)

    if (error) {
        return res.status(401)
            .json({ message: "bad request", error })
    }

    next();
}


export default { LoginValidation, signupValidation }