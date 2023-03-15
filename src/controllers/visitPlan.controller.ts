import VisitPlan from "../models/visitPlan.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await VisitPlan.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "Visit Plan Created Successfully",
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
      let allData = await VisitPlan.findAll(); 
      if(allData){
        return res.status(200).json({
          message: "Visit Plan Fetched Successfully",
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
      let oneData = await VisitPlan.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "Visit Plan Fetched Successfully",
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
      let updatedData = await VisitPlan.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Visit Plan updated successfully",
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
      let deletedData = await VisitPlan.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Visit Plan deleted successfully",
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

const VisitPlanController = new Controller()
export default VisitPlanController