import InvoiceRequestForm from "../models/invoiceRequestForm.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await InvoiceRequestForm.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "Invoice Request Form Created Successfully",
          status: "success",
          statusCode: 201,
          payload: savedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.errors[0].message})
    }
  }

  public async getAll(req: Request, res: Response){
    let data = req.body;
    try {
      let allData = await InvoiceRequestForm.findAll(); 
      if(allData){
        return res.status(200).json({
          message: "Invoice Request Form Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: allData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.errors[0].message})
    }
  }

  public async getOne(req: Request, res: Response){
    let id = req.params.id;
    try {
      let oneData = await InvoiceRequestForm.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "Invoice Request Form Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.errors[0].message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id;
    let data = req.body;
    try {
      let updatedData = await InvoiceRequestForm.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Invoice Request Form updated successfully",
          status: "success",
          statusCode: 200,
          payload: updatedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.errors[0].message})
    }
  }

  public async deleteOne(req: Request, res: Response){
    let id = req.params.id
    try {
      let deletedData = await InvoiceRequestForm.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Invoice Request Form deleted successfully",
          status: "success",
          statusCode: 200,
          payload: deletedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.errors[0].message})
    }
  }
  
}

const InvoiceRequestFormController = new Controller()
export default InvoiceRequestFormController