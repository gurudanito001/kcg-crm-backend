import MarkettingActivity from "../models/markettingActivity.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";
import { uploadImage } from "../services/imageService";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {

      if(data.pictures.length > 0){
        let imagesUrls = await Promise.all(
          data.pictures.map(async (base64Img: any) => {
            let picture = await uploadImage({data: base64Img});
            return picture.secure_url;
          })
        )
        data.pictures = imagesUrls;
      }
      let savedData = await MarkettingActivity.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "Marketting Activity Created Successfully",
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
      let allData = await MarkettingActivity.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      if(allData){
        return res.status(200).json({
          message: "Marketting Activity Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: allData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getAllByEmployeeId(req: Request, res: Response){
    let id = req.params.id;
    try {
      let allData = await MarkettingActivity.findAll({
        where: {employeeId: id},
        order: [['createdAt', 'DESC']]
      }); 
      if(allData){
        return res.status(200).json({
          message: "Marketting Activity Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: allData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async approveMarketingActivity(req: Request, res: Response){
    let id = req.params.id;
    try {
      let updatedData = await MarkettingActivity.update( {approved: true}, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Marketing Activity approved",
          status: "success",
          statusCode: 200,
          payload: updatedData
        })
      }
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getOne(req: Request, res: Response){
    let id = req.params.id;
    try {
      let oneData = await MarkettingActivity.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "Marketting Activity Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
      return res.status(404).json({message: "Marketting Activity not found"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id;
    let data = req.body;
    try {
      let imagesFromDB = data.pictures.filter( (item: string) => item.startsWith("https://"));
      let imagesFromLocal = data.pictures.filter( (item: string) => item.startsWith("data:image"));

      if(imagesFromLocal.length > 0){
        let imagesUrls = await Promise.all(
          imagesFromLocal.map(async (base64Img: any) => {
            let picture = await uploadImage({data: base64Img});
            return picture.secure_url;
          })
        )
        data.pictures = [...imagesFromDB, ...imagesUrls];
      }
      let updatedData = await MarkettingActivity.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Marketting Activity updated successfully",
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
      let deletedData = await MarkettingActivity.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Marketting Activity deleted successfully",
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

const MarkettingActivityController = new Controller()
export default MarkettingActivityController