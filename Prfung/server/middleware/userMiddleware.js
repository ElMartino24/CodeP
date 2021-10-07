import {check, validationResult} from "express-validator";



export const loginValidation = [
    check("username").trim().isLength({min: 2, max: 20}).isString().withMessage('username nix gut'),
    check("password").trim().isLength({min: 8}).isString(),

    (req, res, next) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(422).json({
          message:"falscher User Input",
          content: errors,
          isSuccess: false
        })
      }
      next();
    }
  ]