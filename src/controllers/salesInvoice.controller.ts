import SalesInvoice from "../models/salesInvoice.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await SalesInvoice.create(data); 
      return res.status(201).json({
        message: "Sales Invoice Created Successfully",
        status: "success",
        statusCode: 201,
        payload: savedData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getAll(req: Request, res: Response){
    try {
      let allData = await SalesInvoice.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      return res.status(200).json({
        message: "Sales Invoices Fetched Successfully",
        status: "success",
        statusCode: 200,
        payload: allData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getOne(req: Request, res: Response){
    let id = req.params.id;
    try {
      let oneData = await SalesInvoice.findByPk(id); 
      if(!oneData){
        return res.status(404).json({message: "Sales Invoice not found"})
      }
      return res.status(200).json({
        message: "Sales Invoice Fetched Successfully",
        status: "success",
        statusCode: 200,
        payload: oneData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id
    let data = req.body;
    try {
      let updatedData = await SalesInvoice.update(data, {
        where: {id: id}
      }); 
      return res.status(200).json({
        message: "Sales Invoice updated successfully",
        status: "success",
        statusCode: 200,
        payload: updatedData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async deleteOne(req: Request, res: Response){
    let id = req.params.id
    try {
      let deletedData = await SalesInvoice.destroy({
        where: {id: id}
      });
      return res.status(200).json({
        message: "Sales Invoice deleted successfully",
        status: "success",
        statusCode: 200,
        payload: deletedData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }
  
}

const SalesInvoiceController = new Controller()
export default SalesInvoiceController