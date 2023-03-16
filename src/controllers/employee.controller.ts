import Employee from "../models/employee.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";
import { hashPassword } from "../services/authServices";
import Company from "../models/company.model";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let hashedPassword = await hashPassword(data.password) 
      let newData = { ...data, password: hashedPassword }
      let savedData = await Employee.create(newData); 
      if(savedData){
        return res.status(201).json({
          message: "Employee Created Successfully",
          status: "success",
          statusCode: 201,
          payload: savedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getAll(req: Request, res: Response){
    let data = req.body;
    try {
      let allData = await Employee.findAll(); 
      if(allData){
        return res.status(200).json({
          message: "Employee Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: allData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getOne(req: Request, res: Response){
    let id = req.params.id;
    try {
      let oneData: any = await Employee.findByPk(id); 
      let {supervisor, productHead, locationManager, subordinate} = oneData;
      if(supervisor){
        supervisor = await Employee.findByPk(supervisor)
        oneData.supervisor = {id: supervisor.id, fullName: `${supervisor.firstName} ${supervisor.middleName} ${supervisor.lastName}`}
      }
      if(productHead){
        productHead = await Employee.findByPk(productHead)
        oneData.productHead = {id: productHead.id, fullName: `${productHead.firstName} ${productHead.middleName} ${productHead.lastName}`}
      }
      if(locationManager){
        locationManager = await Employee.findByPk(locationManager)
        oneData.locationManager = {id: locationManager.id, fullName: `${locationManager.firstName} ${locationManager.middleName} ${locationManager.lastName}`}
      }
      
      
      if(oneData){
        return res.status(200).json({
          message: "Employee Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id;
    let data = req.body;
    try {
      let updatedData = await Employee.update(data, {
        where: {id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Employee updated successfully",
          status: "success",
          statusCode: 200,
          payload: updatedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async deleteOne(req: Request, res: Response){
    let id = req.params.id
    try {
      let deletedData = await Employee.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Employee deleted successfully",
          status: "success",
          statusCode: 200,
          payload: deletedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }
  
}

const EmployeeController = new Controller()
export default EmployeeController