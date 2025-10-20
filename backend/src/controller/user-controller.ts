import { NextFunction, Response } from "express";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            message: "Usuário criado com sucesso."
        })
    } catch (err) {
        next(err)
    }
}