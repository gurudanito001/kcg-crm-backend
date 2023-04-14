import Branch from "../models/branch.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await Branch.create(data); 
      return res.status(201).json({
        message: "Branch Created Successfully",
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
      let allData = await Branch.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      return res.status(200).json({
        message: "Branches Fetched Successfully",
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
      let oneData = await Branch.findByPk(id); 
      if(!oneData){
        return res.status(404).json({message: "Branch not found"})
      }
      return res.status(200).json({
        message: "Branch Fetched Successfully",
        status: "success",
        statusCode: 200,
        payload: oneData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getAllByCompanyId(req: Request, res: Response){
    let id = req.params.id;
    try {
      let oneData = await Branch.findAll({ 
        where: {companyId: id},
        order: [['createdAt', 'DESC']]
      }); 
      if(!oneData){
        return res.status(404).json({message: `Could not find branches with companyId`})
      }
      return res.status(200).json({
        message: "Branches Fetched Successfully",
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
      let updatedData = await Branch.update(data, {
        where: {id: id}
      }); 
      return res.status(200).json({
        message: "Branch updated successfully",
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
      let deletedData = await Branch.destroy({
        where: {id: id}
      }); 
      return res.status(200).json({
        message: "Branch deleted successfully",
        status: "success",
        statusCode: 200,
        payload: deletedData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }
  
}

const BranchController = new Controller()
export default BranchController