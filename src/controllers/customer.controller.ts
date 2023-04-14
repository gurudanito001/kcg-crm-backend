import Customer from "../models/customer.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";
import sequelize from "../dbConnection";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await Customer.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "Customer Created Successfully",
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
      let allData = await Customer.findAll({ 
        order: [['employeeId', 'DESC']]
      });
      if(allData){
        return res.status(200).json({
          message: "Customers Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: allData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getAllCustomersByEmployeeId(req: Request, res: Response){
    let id = req.params.id;
    try {
      let allData = await Customer.findAll({ 
        where: {employeeId: id},
        order: [['createdAt', 'DESC']]
      }); 
      if(allData){
        return res.status(200).json({
          message: "Customers Fetched Successfully",
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
      let oneData = await Customer.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "Customer Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
      return res.status(404).json({message: "Customer not found"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id;
    let data = req.body;
    try {
      let updatedData = await Customer.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Customer updated successfully",
          status: "success",
          statusCode: 200,
          payload: updatedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async approveCustomer(req: Request, res: Response){
    let id = req.params.id;
    try {
      let updatedData = await Customer.update( {approved: true}, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Customer approved",
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
      let deletedData = await Customer.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Customer deleted successfully",
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

const CustomerController = new Controller()
export default CustomerController