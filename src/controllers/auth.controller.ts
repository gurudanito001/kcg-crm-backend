import Branch from "../models/branch.model";
import Employee from "../models/employee.model";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import sendEmail from "../services/sendEmail";
import Interfaces from "../interfaces";
import { hashPassword, isPasswordMatch } from "../services/authServices";
import { generateToken, decodeToken } from "../services/tokenService";
import { tokenTypes } from "../config/token";
import config from "../config/config";
import { send } from "process";


class Controller {

  public async login(req: Request, res: Response){
    let {email, password} = req.body;
    try {
      let user: any = await Employee.findOne({ where: { email } }); 
      if(!user){
        return res.status(400).json({message: "Email or Password Invalid"})
      }
      let passwordMatched = await isPasswordMatch(password, user.password);
      if(!passwordMatched){
        return res.status(400).json({message: "Email or Password Invalid"})
      } 
      let token = generateToken({userId: user.id, email, expires: config.JWT_ACCESS_EXPIRATION_MINUTES, type: tokenTypes.ACCESS, secret: config.SECRET, staffCadre: user.staffCadre})

      delete user.password
      return res.status(201).json({
        message: "Employee Login Successful",
        status: "success",
        statusCode: 200,
        payload: {user, token}
      })
      
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async forgotPassword(req: Request, res: Response){
    let {email} = req.body;
    try {
      let employee: any = await Employee.findOne({where: {email}}) ; 
      if(!employee){
        return res.status(404).json({message: 'Employee with email does not exist'})
      }
      let token = generateToken({userId: employee.id, email, expires: config.JWT_RESET_PASSWORD_EXPIRATION_MINUTES, type: tokenTypes.RESET_PASSWORD, secret: config.SECRET  })
      await sendEmail({email, url: `${config.FRONTEND_URL}/resetPassword?token=${token}`, buttonText: "Reset Password"})
      return res.status(200).json({
        message: "Reset Password Token!!!",
        status: "success",
        statusCode: 200,
        payload: {employee, token}
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async resetPassword(req: Request, res: Response){
    let {token, password} = req.body;
    try {
      let tokenData = decodeToken(token) as Interfaces.TokenData;
      let {email, userId, type} = tokenData;
      if(type !== tokenTypes.RESET_PASSWORD){
        throw new Error("Invalid Token")
      }

      let employee = await Employee.findOne({where: {email, id: userId}});
      if(!employee){
        return res.status(400).json({message: "User not found"})
      }

      let hashedPassword = await hashPassword(password);
      console.log(hashedPassword);
      let updatedEmployee = await Employee.update({password: hashedPassword}, {
        where: {email, id: userId}
      })

     return res.status(200).json({
        message: "Reset Password Successful!!!",
        status: "success",
        statusCode: 200,
        payload: updatedEmployee
      }) 
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

 
  
}

const AuthController = new Controller()
export default AuthController