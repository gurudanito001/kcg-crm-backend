import CompanyGroup from "../models/companyGroup.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await CompanyGroup.create(data); 
      return res.status(201).json({
        message: "Company Group Created Successfully",
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
      let allData = await CompanyGroup.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      return res.status(200).json({
        message: "Company Groups Fetched Successfully",
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
      let oneData = await CompanyGroup.findByPk(id); 
      if(!oneData){
        return res.status(404).json({message: "Company Group not found"})
      }
      return res.status(200).json({
        message: "Company Group Fetched Successfully",
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
      let updatedData = await CompanyGroup.update(data, {
        where: {id: id}
      }); 
      return res.status(200).json({
        message: "Company Group updated successfully",
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
      let deletedData = await CompanyGroup.destroy({
        where: {id: id}
      });
      return res.status(200).json({
        message: "Company Group deleted successfully",
        status: "success",
        statusCode: 200,
        payload: deletedData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }
  
}

const CompanyGroupController = new Controller()
export default CompanyGroupController