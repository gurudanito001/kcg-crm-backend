import Lga from "../models/lga.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await Lga.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "Lga Created Successfully",
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
      let allData = await Lga.findAll(); 
      if(allData){
        return res.status(200).json({
          message: "Lgas Fetched Successfully",
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
      let oneData = await Lga.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "Lga Fetched Successfully",
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
    let id = req.params.id
    let data = req.body;
    try {
      let updatedData = await Lga.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Lga updated successfully",
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
      let deletedData = await Lga.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Lga deleted successfully",
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

const LgaController = new Controller()
export default LgaController;