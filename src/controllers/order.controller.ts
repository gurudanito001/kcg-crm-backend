import Order from "../models/order.model";
import PfiRequestForm from "../models/pfiRequestForm.model";
import Interfaces  from "../interfaces";
import { Request, Response } from "express";

class Controller {
  public async create(req: Request, res: Response){
    let data = req.body;
    try {
      let savedData = await Order.create(data); 
      return res.status(201).json({
        message: "Order Created Successfully",
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
      let allData = await Order.findAll({
        order: [['createdAt', 'DESC']]
      }); 

      if(allData?.length > 0){
        let allOrdersWithPFIs: any = [];
        allData.forEach( async (order: any) => {
          let allPfis = await PfiRequestForm.findAll({ where: {orderId:  order.id} })
          order.pfiRequestForms = allPfis;
          allOrdersWithPFIs.push(order)
        })
        allData = allOrdersWithPFIs
      }
      return res.status(200).json({
        message: "Orders Fetched Successfully",
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
      let oneData = await Order.findByPk(id); 
      if(!oneData){
        return res.status(404).json({message: "Order not found"})
      }
      return res.status(200).json({
        message: "Order Fetched Successfully",
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
      let updatedData = await Order.update(data, {
        where: {id: id}
      }); 
      return res.status(200).json({
        message: "Order updated successfully",
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
      let deletedData = await Order.destroy({
        where: {id: id}
      }); 
      return res.status(200).json({
        message: "Order deleted successfully",
        status: "success",
        statusCode: 200,
        payload: deletedData
      })
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }
  
}

const OrderController = new Controller()
export default OrderController