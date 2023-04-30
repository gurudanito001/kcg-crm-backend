import MonthlyTarget from "../models/monthlyTarget.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await MonthlyTarget.create(data); 
      return res.status(201).json({
        message: "Monthly Target Created Successfully",
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
      let allData = await MonthlyTarget.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      return res.status(200).json({
        message: "Monthly Targets Fetched Successfully",
        status: "success",
        statusCode: 200,
        payload: allData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getAllByEmployeeId(req: Request, res: Response){
    let id = req.params.id
    try {
      let allData = await MonthlyTarget.findAll({
        where: {employeeId: id},
        order: [['createdAt', 'DESC']]
      }); 
      return res.status(200).json({
        message: "Monthly Targets Fetched Successfully",
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
      let oneData = await MonthlyTarget.findByPk(id); 
      if(!oneData){
        return res.status(404).json({message: "Monthly Target not found"})
      }
      return res.status(200).json({
        message: "Monthly Target Fetched Successfully",
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
      let updatedData = await MonthlyTarget.update(data, {
        where: {id: id}
      }); 
      return res.status(200).json({
        message: "Monthly Target updated successfully",
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
      let deletedData = await MonthlyTarget.destroy({
        where: {id: id}
      });
      return res.status(200).json({
        message: "Monthly Target deleted successfully",
        status: "success",
        statusCode: 200,
        payload: deletedData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }
  
}

const MonthlyTargetController = new Controller()
export default MonthlyTargetController