import PfiRequestForm from "../models/pfiRequestForm.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
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
      let allData = await PfiRequestForm.findAll(); 
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