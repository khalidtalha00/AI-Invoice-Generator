import express from 'express'
import { clerkMiddleware } from '@clerk/express'
import {createInvoice, deleteInvoice, getInvoiceById, getInvoices, updateInvoice} from '../controllers/invoiceController.js'

const invoiceRouter=express.Router()
invoiceRouter.use(clerkMiddleware())
invoiceRouter.get("/",getInvoices)
invoiceRouter.get("/:id",getInvoiceById)
invoiceRouter.get("/",createInvoice)
invoiceRouter.get("/:id",updateInvoice)
invoiceRouter.get("/:id",deleteInvoice)

export default invoiceRouter
