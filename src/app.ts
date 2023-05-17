import express, { Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import cors from 'cors';
import AuthController from './controllers/auth.controller';
import CompanyGroupController from './controllers/companyGroup.controller';
import CompanyController from './controllers/company.controller';
import BranchController from './controllers/branch.controller';
import StateController from './controllers/state.controller';
import LgaController from './controllers/lga.controller';
import ContactPersonController from './controllers/contactPerson.controller';
import CustomerController from './controllers/customer.controller';
import CustomerVisitController from './controllers/customerVisit.controller';
import CustomerVisitReportController from './controllers/customerVisitReport.controller';
import EmployeeController from './controllers/employee.controller';
import InvoiceRequestFormController from './controllers/invoiceRequestForm.controller';
import MarkettingActivityController from './controllers/markettingActivity.controller';
import PaymentController from './controllers/payment.controller';
import PfiRequestFormController from './controllers/pfiRequestForm.controller';
import ProductController from './controllers/product.controller';
import ProductGroupController from './controllers/productGroup.controller';
import StaffCadreController from './controllers/staffCadre.controller';
import VehicleDeliveryController from './controllers/vehicleDelivery.controller';
import WeeklyVisitPlanController from './controllers/weeklyVisitPlan.controller';
import MonthlyVisitPlanController from './controllers/monthlyVisitPlan.controller';
import SalesInvoiceController from './controllers/salesInvoice.controller';
import MonthlyTargetController from './controllers/monthlyTarget.controller';


const app: Express = express();

app.use(bodyParser.json({limit: '50mb'})); // define the size limit
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));	// define the size limit
app.use(express.json());
app.use(cors());

//Testing
app.get('/', (req, res) =>{
  res.send("KCG-CRM API is live!!!!!")
})

// AUTH
app.post('/auth/login', AuthController.login);
app.post('/auth/forgotPassword', AuthController.forgotPassword);
app.post('/auth/resetPassword', AuthController.resetPassword);

// COMPANY GROUP
app.post('/companyGroup/create', CompanyGroupController.create);
app.get('/companyGroup', CompanyGroupController.getAll);
app.get('/companyGroup/:id', CompanyGroupController.getOne);
app.put('/companyGroup/:id', CompanyGroupController.updateOne);
app.delete('/companyGroup/:id', CompanyGroupController.deleteOne);

// COMPANY
app.post('/company/create', CompanyController.create);
app.get('/company', CompanyController.getAll);
app.get('/company/:id', CompanyController.getOne);
app.put('/company/:id', CompanyController.updateOne);
app.delete('/company/:id', CompanyController.deleteOne);

//Branch
app.post('/branch/create', BranchController.create);
app.get('/branch', BranchController.getAll);
app.get('/branch/:id', BranchController.getOne);
app.get('/branch/company/:id', BranchController.getAllByCompanyId);
app.put('/branch/:id', BranchController.updateOne);
app.delete('/branch/:id', BranchController.deleteOne);

//State
app.post('/state/create', StateController.create);
app.get('/state', StateController.getAll);
app.get('/state/:id', StateController.getOne);
app.put('/state/:id', StateController.updateOne);
app.delete('/state/:id', StateController.deleteOne);

//Lga
app.post('/lga/create', LgaController.create);
app.get('/lga', LgaController.getAll);
app.get('/lga/:id', LgaController.getOne);
app.put('/lga/:id', LgaController.updateOne);
app.delete('/lga/:id', LgaController.deleteOne);

//Contact Person
app.post('/contactPerson/create', ContactPersonController.create);
app.get('/contactPerson', ContactPersonController.getAll);
app.get('/contactPerson/customer/:id', ContactPersonController.getAllByCustomerId);
app.get('/contactPerson/:id', ContactPersonController.getOne);
app.put('/contactPerson/:id', ContactPersonController.updateOne);
app.delete('/contactPerson/:id', ContactPersonController.deleteOne);

//Customer
app.post('/customer/create', CustomerController.create);
app.get('/customer', CustomerController.getAll);
app.get('/customer/employee/:id', CustomerController.getAllCustomersByEmployeeId);
app.get('/customer/:id', CustomerController.getOne);
app.put('/customer/:id', CustomerController.updateOne);
app.put('/customer/approve/:id', CustomerController.approveCustomer);
app.delete('/customer/:id', CustomerController.deleteOne);

//Customer Visit
app.post('/customerVisit/create', CustomerVisitController.create);
app.get('/customerVisit', CustomerVisitController.getAll);
app.get('/customerVisit/employee/:id', CustomerVisitController.getAllByEmployeeId);
app.get('/customerVisit/:id', CustomerVisitController.getOne);
app.put('/customerVisit/:id', CustomerVisitController.updateOne);
app.delete('/customerVisit/:id', CustomerVisitController.deleteOne);

//Customer Visit Report
app.post('/customerVisitReport/create', CustomerVisitReportController.create);
app.get('/customerVisitReport', CustomerVisitReportController.getAll);
app.get('/customerVisitReport/:id', CustomerVisitReportController.getOne);
app.put('/customerVisitReport/:id', CustomerVisitReportController.updateOne);
app.delete('/customerVisitReport/:id', CustomerVisitReportController.deleteOne);

//Employee
app.post('/employee/create', EmployeeController.create);
app.get('/employee', EmployeeController.getAll);
app.get('/employee/subordinates/:id', EmployeeController.getAllSubordinates);
app.get('/employee/:id', EmployeeController.getOne);
app.put('/employee/:id', EmployeeController.updateOne);
app.delete('/employee/:id', EmployeeController.deleteOne);

//Invoice Request Form
app.post('/invoiceRequestForm/create', InvoiceRequestFormController.create);
app.get('/invoiceRequestForm', InvoiceRequestFormController.getAll);
app.get('/invoiceRequestForm/employee/:id', InvoiceRequestFormController.getAllByEmployeeId);
app.get('/invoiceRequestForm/:id', InvoiceRequestFormController.getOne);
app.put('/invoiceRequestForm/:id', InvoiceRequestFormController.updateOne);
app.put('/invoiceRequestForm/approve/:id', InvoiceRequestFormController.approveInvoiceRequest);
app.delete('/invoiceRequestForm/:id', InvoiceRequestFormController.deleteOne);

//Invoice Request Form
app.post('/markettingActivity/create', MarkettingActivityController.create);
app.get('/markettingActivity', MarkettingActivityController.getAll);
app.get('/markettingActivity/employee/:id', MarkettingActivityController.getAllByEmployeeId);
app.get('/markettingActivity/:id', MarkettingActivityController.getOne);
app.put('/markettingActivity/:id', MarkettingActivityController.updateOne);
app.put('/markettingActivity/approve/:id', MarkettingActivityController.approveMarketingActivity);
app.delete('/markettingActivity/:id', MarkettingActivityController.deleteOne);

//Payment
app.post('/payment/create', PaymentController.create);
app.get('/payment', PaymentController.getAll);
app.get('/payment/:id', PaymentController.getOne);
app.put('/payment/:id', PaymentController.updateOne);
app.delete('/payment/:id', PaymentController.deleteOne);

//PFI Request Form
app.post('/pfiRequestForm/create', PfiRequestFormController.create);
app.get('/pfiRequestForm', PfiRequestFormController.getAll);
app.get('/pfiRequestForm/employee/:id', PfiRequestFormController.getAllByEmployeeId);
app.get('/pfiRequestForm/:id', PfiRequestFormController.getOne);
app.put('/pfiRequestForm/:id', PfiRequestFormController.updateOne);
app.put('/pfiRequestForm/approve/:id', PfiRequestFormController.approvePfiRequest);
app.delete('/pfiRequestForm/:id', PfiRequestFormController.deleteOne);

//Product
app.post('/product/create', ProductController.create);
app.get('/product', ProductController.getAll);
app.get('/product/productGroup/:id', ProductController.getByProductGroupId);
app.get('/product/:id', ProductController.getOne);
app.put('/product/:id', ProductController.updateOne);
app.delete('/product/:id', ProductController.deleteOne);

//Product Group
app.post('/productGroup/create', ProductGroupController.create);
app.get('/productGroup', ProductGroupController.getAll);
app.get('/productGroup/:id', ProductGroupController.getOne);
app.put('/productGroup/:id', ProductGroupController.updateOne);
app.delete('/productGroup/:id', ProductGroupController.deleteOne);

//Staff Cadre
app.post('/staffCadre/create', StaffCadreController.create);
app.get('/staffCadre', StaffCadreController.getAll);
app.get('/staffCadre/:id', StaffCadreController.getOne);
app.put('/staffCadre/:id', StaffCadreController.updateOne);
app.delete('/staffCadre/:id', StaffCadreController.deleteOne);

//Vehicle Delivery
app.post('/vehicleDelivery/create', VehicleDeliveryController.create);
app.get('/vehicleDelivery', VehicleDeliveryController.getAll);
app.get('/vehicleDelivery/:id', VehicleDeliveryController.getOne);
app.put('/vehicleDelivery/:id', VehicleDeliveryController.updateOne);
app.delete('/vehicleDelivery/:id', VehicleDeliveryController.deleteOne);

//Weekly Visit Plan
app.post('/weeklyVisitPlan/create', WeeklyVisitPlanController.create);
app.get('/weeklyVisitPlan', WeeklyVisitPlanController.getAll);
app.get('/weeklyVisitPlan/employee/:id', WeeklyVisitPlanController.getAllByEmployeeId);
app.get('/weeklyVisitPlan/:id', WeeklyVisitPlanController.getOne);
app.put('/weeklyVisitPlan/:id', WeeklyVisitPlanController.updateOne);
app.delete('/weeklyVisitPlan/:id', WeeklyVisitPlanController.deleteOne);

//Monthly Visit Plan
app.post('/monthlyVisitPlan/create', MonthlyVisitPlanController.create);
app.get('/monthlyVisitPlan', MonthlyVisitPlanController.getAll);
app.get('/monthlyVisitPlan/employee/:id', MonthlyVisitPlanController.getAllByEmployeeId);
app.get('/monthlyVisitPlan/:id', MonthlyVisitPlanController.getOne);
app.put('/monthlyVisitPlan/:id', MonthlyVisitPlanController.updateOne);
app.delete('/monthlyVisitPlan/:id', MonthlyVisitPlanController.deleteOne);

app.post('/salesInvoice/create', SalesInvoiceController.create);
app.get('/salesInvoice', SalesInvoiceController.getAll);
app.get('/salesInvoice/employee/:id', SalesInvoiceController.getAllByEmployeeId);
app.get('/salesInvoice/:id', SalesInvoiceController.getOne);
app.put('/salesInvoice/:id', SalesInvoiceController.updateOne);
app.delete('/salesInvoice/:id', SalesInvoiceController.deleteOne);

app.post('/monthlyTarget/create', MonthlyTargetController.create);
app.get('/monthlyTarget', MonthlyTargetController.getAll);
app.get('/monthlyTarget/employee/:id', MonthlyTargetController.getAllByEmployeeId);
app.get('/monthlyTarget/:id', MonthlyTargetController.getOne);
app.put('/monthlyTarget/:id', MonthlyTargetController.updateOne);
app.delete('/monthlyTarget/:id', MonthlyTargetController.deleteOne);

app.get("/hello", (req, res) => {
  res.send("This is your hello message")
})


export default app;
