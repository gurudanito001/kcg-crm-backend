import CustomerVisitReport from "../models/customerVisitReport.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";
import CustomerVisit from "../models/customerVisit.model";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData: any = await CustomerVisitReport.create(data); 
      await CustomerVisit.update({visitReportId: savedData.id}, {where: {id: savedData.customerVisitId}})
      if(savedData){
        return res.status(201).json({
          message: "Customer Visit Report Created Successfully",
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
      let allData = await CustomerVisitReport.findAll(); 
      if(allData){
        return res.status(200).json({
          message: "Customer Visit Report Fetched Successfully",
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
      let oneData = await CustomerVisitReport.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "Customer Visit Report Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
      return res.status(404).json({message: "Customer Visit Report not found"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id;
    let data = req.body;
    try {
      let updatedData = await CustomerVisitReport.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Customer Visit Report updated successfully",
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
      let deletedData = await CustomerVisitReport.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Customer Visit Report deleted successfully",
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

const CustomerVisitReportController = new Controller()
export default CustomerVisitReportController