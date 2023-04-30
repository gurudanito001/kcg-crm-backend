import Product from "../models/product.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";
import { uploadImage } from "../services/imageService";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      if(data.images.length > 0){
        let productImagesUrls = await Promise.all(
          data.images.map(async (base64Img: any) => {
            let image = await uploadImage({data: base64Img});
            return image.secure_url;
          })
        )
        data.images = productImagesUrls;
      }

      if(data.brochures.length > 0){
        return res.status(400).json({message: "Brochures error"})
        let productBrochureUrls = await Promise.all(
          data.brochures.map(async (base64Pdf: any) => {
            let pdf = await uploadImage({data: base64Pdf});
            console.log(pdf.secure_url)
            return pdf.secure_url;
          })
        )
        data.brochures = productBrochureUrls;
      }
      
      let savedData = await Product.create(data); 
      if(savedData){
        return res.status(201).json({
          message: "Product Created Successfully",
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
      let allData = await Product.findAll({
        order: [['createdAt', 'DESC']]
      }); 
      if(allData){
        return res.status(200).json({
          message: "Product Fetched Successfully",
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
      let oneData = await Product.findByPk(id); 
      if(oneData){
        return res.status(200).json({
          message: "Product Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: oneData
        })
      }
      return res.status(404).json({message: "Product not found"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }

  public async getByProductGroupId(req: Request, res: Response){
    let id = req.params.id;
    try {
      let allData = await Product.findAll({ where: {productGroupId: id}}); 
      if(allData){
        return res.status(200).json({
          message: "Products Fetched Successfully",
          status: "success",
          statusCode: 200,
          payload: allData
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
      let imagesFromDB = data.images.filter( (item: string) => item.startsWith("https://"));
      let imagesFromLocal = data.images.filter( (item: string) => item.startsWith("data:image"));

      if(imagesFromLocal.length > 0){
        let imagesUrls = await Promise.all(
          imagesFromLocal.map(async (base64Img: any) => {
            let picture = await uploadImage({data: base64Img});
            return picture.secure_url;
          })
        )
        data.images = [...imagesFromDB, ...imagesUrls];
      }
      let updatedData = await Product.update(data, {
        where: {id: id}
      }); 
      if(updatedData){
        return res.status(200).json({
          message: "Product updated successfully",
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
      let deletedData = await Product.destroy({
        where: {id: id}
      }); 
      if(deletedData){
        return res.status(200).json({
          message: "Product deleted successfully",
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

const ProductController = new Controller()
export default ProductController