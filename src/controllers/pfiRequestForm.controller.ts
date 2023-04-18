import PfiRequestForm from "../models/pfiRequestForm.model";
import Customer from "../models/customer.model";
import ContactPerson from "../models/contactPerson.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    let newCustomer: any, newContactPerson
    try {
      if(data.customerType === "new customer"){
        let {companyAddress, companyName, employeeId, contactPerson, mobile, designation, emailAddress} = data;
        newCustomer = await Customer.create({employeeId, companyName, address1: companyAddress});
        if(!newCustomer){
          return res.status(400).json({message: "Could not create new Customer"})
        }
        data.customerId = newCustomer.id;
        let names = contactPerson.split(" ");
        newContactPerson = await ContactPerson.create({employeeId, customerId: newCustomer?.id, firstName: names[0], lastName: names[1], email: emailAddress, phoneNumber1: mobile, designation })
        if(!newContactPerson){
          return res.status(400).json({message: "Could not create new Contact Person"})
        }
      }
      delete data.customerType;
      let savedData = await PfiRequestForm.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "PFI Request Form Created Successfully",
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
      let allData = await PfiRequestForm.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      if(allData){
        return res.status(200).json({
          message: "PFI Request Form Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: allData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getAllByEmployeeId(req: Request, res: Response){
    let id = req.params.id;
    try {
      let allData = await PfiRequestForm.findAll({
        where: {employeeId: id},
        order: [['createdAt', 'DESC']]
      }); 
      if(allData){
        return res.status(200).json({
          message: "PFI Requests Fetched Successfully",
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
      let oneData = await PfiRequestForm.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "PFI Request Form Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
      return res.status(404).json({message: "PFI Request Form not found"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id;
    let data = req.body;
    try {
      let updatedData = await PfiRequestForm.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "PFI Request Form updated successfully",
          status: "success",
          statusCode: 200,
          payload: updatedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async approvePfiRequest(req: Request, res: Response){
    let id = req.params.id;
    try {
      let updatedData = await PfiRequestForm.update({approved: true}, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "PFI Request approved",
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
      let deletedData = await PfiRequestForm.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "PFI Request Form deleted successfully",
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

const PfiRequestFormController = new Controller()
export default PfiRequestFormController