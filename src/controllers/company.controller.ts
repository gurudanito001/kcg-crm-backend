import Company from "../models/company.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";
import Branch from "../models/branch.model";
import { uploadImage } from "../services/imageService";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let result = await uploadImage({ data: data.logo });
      if(!result){
        return res.status(400).json({message: "Could not Save Logo"})
      }
      let {name, group, email, code, address, brands, extraData} = data
      let savedData = await Company.create({name, group, email, code, address, brands, logo: result.secure_url, extraData});
      if(savedData){
        return res.status(201).json({
          message: "Company Created Successfully",
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
      let allData = await Company.findAll(); 
      if(allData){
        return res.status(200).json({
          message: "Companies Fetched Successfully",
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
      let oneData: any = await Company.findByPk(id); 
      let branches = await Branch.findAll({
        where: {companyId: id}
      })
      oneData.branches = branches;
      if(oneData){
        return res.status(200).json({
          message: "Company Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
      return res.status(404).json({message: "Company not found"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async updateOne(req: Request, res: Response){
    let id = req.params.id
    let data = req.body;
    try {
      if(data.logo.startsWith("data:image")){
        let result = await uploadImage({ data: data.logo });
        if(!result){
          return res.status(400).json({message: "Could not Save Logo"})
        }
        data.logo = result.secure_url
      }
      
      let updatedData = await Company.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Company updated successfully",
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
      let deletedData = await Company.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Company deleted successfully",
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

const CompanyController = new Controller()
export default CompanyController