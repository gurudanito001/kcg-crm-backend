import State from "../models/state.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";
import sequelize from "../dbConnection";
import Company from "../models/company.model";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await State.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "State Created Successfully",
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
      let allData = await State.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      if(allData){
        return res.status(200).json({
          message: "States Fetched Successfully",
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
      let oneData = await State.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "State Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
      return res.status(404).json({message: "State not found"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id
    let data = req.body;
    try {
      let updatedData = await State.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "State updated successfully",
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
      let deletedData = await State.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "State deleted successfully",
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

const StateController = new Controller()
export default StateController