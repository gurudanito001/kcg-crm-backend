"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_controller_1 = __importDefault(require("./controllers/auth.controller"));
const companyGroup_controller_1 = __importDefault(require("./controllers/companyGroup.controller"));
const company_controller_1 = __importDefault(require("./controllers/company.controller"));
const branch_controller_1 = __importDefault(require("./controllers/branch.controller"));
const state_controller_1 = __importDefault(require("./controllers/state.controller"));
const lga_controller_1 = __importDefault(require("./controllers/lga.controller"));
const contactPerson_controller_1 = __importDefault(require("./controllers/contactPerson.controller"));
const customer_controller_1 = __importDefault(require("./controllers/customer.controller"));
const customerVisit_controller_1 = __importDefault(require("./controllers/customerVisit.controller"));
const customerVisitReport_controller_1 = __importDefault(require("./controllers/customerVisitReport.controller"));
const employee_controller_1 = __importDefault(require("./controllers/employee.controller"));
const invoiceRequestForm_controller_1 = __importDefault(require("./controllers/invoiceRequestForm.controller"));
const markettingActivity_controller_1 = __importDefault(require("./controllers/markettingActivity.controller"));
const payment_controller_1 = __importDefault(require("./controllers/payment.controller"));
const pfiRequestForm_controller_1 = __importDefault(require("./controllers/pfiRequestForm.controller"));
const product_controller_1 = __importDefault(require("./controllers/product.controller"));
const productGroup_controller_1 = __importDefault(require("./controllers/productGroup.controller"));
const staffCadre_controller_1 = __importDefault(require("./controllers/staffCadre.controller"));
const vehicleDelivery_controller_1 = __importDefault(require("./controllers/vehicleDelivery.controller"));
const weeklyVisitPlan_controller_1 = __importDefault(require("./controllers/weeklyVisitPlan.controller"));
const monthlyVisitPlan_controller_1 = __importDefault(require("./controllers/monthlyVisitPlan.controller"));
const salesInvoice_controller_1 = __importDefault(require("./controllers/salesInvoice.controller"));
const monthlyTarget_controller_1 = __importDefault(require("./controllers/monthlyTarget.controller"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '50mb' })); // define the size limit
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true })); // define the size limit
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Testing
app.get('/', (req, res) => {
    res.send("KCG-CRM API is live!!!!!");
});
// AUTH
app.post('/auth/login', auth_controller_1.default.login);
app.post('/auth/forgotPassword', auth_controller_1.default.forgotPassword);
app.post('/auth/resetPassword', auth_controller_1.default.resetPassword);
// COMPANY GROUP
app.post('/companyGroup/create', companyGroup_controller_1.default.create);
app.get('/companyGroup', companyGroup_controller_1.default.getAll);
app.get('/companyGroup/:id', companyGroup_controller_1.default.getOne);
app.put('/companyGroup/:id', companyGroup_controller_1.default.updateOne);
app.delete('/companyGroup/:id', companyGroup_controller_1.default.deleteOne);
// COMPANY
app.post('/company/create', company_controller_1.default.create);
app.get('/company', company_controller_1.default.getAll);
app.get('/company/:id', company_controller_1.default.getOne);
app.put('/company/:id', company_controller_1.default.updateOne);
app.delete('/company/:id', company_controller_1.default.deleteOne);
//Branch
app.post('/branch/create', branch_controller_1.default.create);
app.get('/branch', branch_controller_1.default.getAll);
app.get('/branch/:id', branch_controller_1.default.getOne);
app.get('/branch/company/:id', branch_controller_1.default.getAllByCompanyId);
app.put('/branch/:id', branch_controller_1.default.updateOne);
app.delete('/branch/:id', branch_controller_1.default.deleteOne);
//State
app.post('/state/create', state_controller_1.default.create);
app.get('/state', state_controller_1.default.getAll);
app.get('/state/:id', state_controller_1.default.getOne);
app.put('/state/:id', state_controller_1.default.updateOne);
app.delete('/state/:id', state_controller_1.default.deleteOne);
//Lga
app.post('/lga/create', lga_controller_1.default.create);
app.get('/lga', lga_controller_1.default.getAll);
app.get('/lga/:id', lga_controller_1.default.getOne);
app.put('/lga/:id', lga_controller_1.default.updateOne);
app.delete('/lga/:id', lga_controller_1.default.deleteOne);
//Contact Person
app.post('/contactPerson/create', contactPerson_controller_1.default.create);
app.get('/contactPerson', contactPerson_controller_1.default.getAll);
app.get('/contactPerson/customer/:id', contactPerson_controller_1.default.getAllByCustomerId);
app.get('/contactPerson/:id', contactPerson_controller_1.default.getOne);
app.put('/contactPerson/:id', contactPerson_controller_1.default.updateOne);
app.delete('/contactPerson/:id', contactPerson_controller_1.default.deleteOne);
//Customer
app.post('/customer/create', customer_controller_1.default.create);
app.get('/customer', customer_controller_1.default.getAll);
app.get('/customer/employee/:id', customer_controller_1.default.getAllCustomersByEmployeeId);
app.get('/customer/:id', customer_controller_1.default.getOne);
app.put('/customer/:id', customer_controller_1.default.updateOne);
app.put('/customer/approve/:id', customer_controller_1.default.approveCustomer);
app.delete('/customer/:id', customer_controller_1.default.deleteOne);
//Customer Visit
app.post('/customerVisit/create', customerVisit_controller_1.default.create);
app.get('/customerVisit', customerVisit_controller_1.default.getAll);
app.get('/customerVisit/employee/:id', customerVisit_controller_1.default.getAllByEmployeeId);
app.get('/customerVisit/:id', customerVisit_controller_1.default.getOne);
app.put('/customerVisit/:id', customerVisit_controller_1.default.updateOne);
app.delete('/customerVisit/:id', customerVisit_controller_1.default.deleteOne);
//Customer Visit Report
app.post('/customerVisitReport/create', customerVisitReport_controller_1.default.create);
app.get('/customerVisitReport', customerVisitReport_controller_1.default.getAll);
app.get('/customerVisitReport/:id', customerVisitReport_controller_1.default.getOne);
app.put('/customerVisitReport/:id', customerVisitReport_controller_1.default.updateOne);
app.delete('/customerVisitReport/:id', customerVisitReport_controller_1.default.deleteOne);
//Employee
app.post('/employee/create', employee_controller_1.default.create);
app.get('/employee', employee_controller_1.default.getAll);
app.get('/employee/:id', employee_controller_1.default.getOne);
app.put('/employee/:id', employee_controller_1.default.updateOne);
app.delete('/employee/:id', employee_controller_1.default.deleteOne);
//Invoice Request Form
app.post('/invoiceRequestForm/create', invoiceRequestForm_controller_1.default.create);
app.get('/invoiceRequestForm', invoiceRequestForm_controller_1.default.getAll);
app.get('/invoiceRequestForm/employee/:id', invoiceRequestForm_controller_1.default.getAllByEmployeeId);
app.get('/invoiceRequestForm/:id', invoiceRequestForm_controller_1.default.getOne);
app.put('/invoiceRequestForm/:id', invoiceRequestForm_controller_1.default.updateOne);
app.put('/invoiceRequestForm/approve/:id', invoiceRequestForm_controller_1.default.approveInvoiceRequest);
app.delete('/invoiceRequestForm/:id', invoiceRequestForm_controller_1.default.deleteOne);
//Invoice Request Form
app.post('/markettingActivity/create', markettingActivity_controller_1.default.create);
app.get('/markettingActivity', markettingActivity_controller_1.default.getAll);
app.get('/markettingActivity/employee/:id', markettingActivity_controller_1.default.getAllByEmployeeId);
app.get('/markettingActivity/:id', markettingActivity_controller_1.default.getOne);
app.put('/markettingActivity/:id', markettingActivity_controller_1.default.updateOne);
app.put('/markettingActivity/approve/:id', markettingActivity_controller_1.default.approveMarketingActivity);
app.delete('/markettingActivity/:id', markettingActivity_controller_1.default.deleteOne);
//Payment
app.post('/payment/create', payment_controller_1.default.create);
app.get('/payment', payment_controller_1.default.getAll);
app.get('/payment/:id', payment_controller_1.default.getOne);
app.put('/payment/:id', payment_controller_1.default.updateOne);
app.delete('/payment/:id', payment_controller_1.default.deleteOne);
//PFI Request Form
app.post('/pfiRequestForm/create', pfiRequestForm_controller_1.default.create);
app.get('/pfiRequestForm', pfiRequestForm_controller_1.default.getAll);
app.get('/pfiRequestForm/employee/:id', pfiRequestForm_controller_1.default.getAllByEmployeeId);
app.get('/pfiRequestForm/:id', pfiRequestForm_controller_1.default.getOne);
app.put('/pfiRequestForm/:id', pfiRequestForm_controller_1.default.updateOne);
app.put('/pfiRequestForm/approve/:id', pfiRequestForm_controller_1.default.approvePfiRequest);
app.delete('/pfiRequestForm/:id', pfiRequestForm_controller_1.default.deleteOne);
//Product
app.post('/product/create', product_controller_1.default.create);
app.get('/product', product_controller_1.default.getAll);
app.get('/product/productGroup/:id', product_controller_1.default.getByProductGroupId);
app.get('/product/:id', product_controller_1.default.getOne);
app.put('/product/:id', product_controller_1.default.updateOne);
app.delete('/product/:id', product_controller_1.default.deleteOne);
//Product Group
app.post('/productGroup/create', productGroup_controller_1.default.create);
app.get('/productGroup', productGroup_controller_1.default.getAll);
app.get('/productGroup/:id', productGroup_controller_1.default.getOne);
app.put('/productGroup/:id', productGroup_controller_1.default.updateOne);
app.delete('/productGroup/:id', productGroup_controller_1.default.deleteOne);
//Staff Cadre
app.post('/staffCadre/create', staffCadre_controller_1.default.create);
app.get('/staffCadre', staffCadre_controller_1.default.getAll);
app.get('/staffCadre/:id', staffCadre_controller_1.default.getOne);
app.put('/staffCadre/:id', staffCadre_controller_1.default.updateOne);
app.delete('/staffCadre/:id', staffCadre_controller_1.default.deleteOne);
//Vehicle Delivery
app.post('/vehicleDelivery/create', vehicleDelivery_controller_1.default.create);
app.get('/vehicleDelivery', vehicleDelivery_controller_1.default.getAll);
app.get('/vehicleDelivery/:id', vehicleDelivery_controller_1.default.getOne);
app.put('/vehicleDelivery/:id', vehicleDelivery_controller_1.default.updateOne);
app.delete('/vehicleDelivery/:id', vehicleDelivery_controller_1.default.deleteOne);
//Weekly Visit Plan
app.post('/weeklyVisitPlan/create', weeklyVisitPlan_controller_1.default.create);
app.get('/weeklyVisitPlan', weeklyVisitPlan_controller_1.default.getAll);
app.get('/weeklyVisitPlan/employee/:id', weeklyVisitPlan_controller_1.default.getAllByEmployeeId);
app.get('/weeklyVisitPlan/:id', weeklyVisitPlan_controller_1.default.getOne);
app.put('/weeklyVisitPlan/:id', weeklyVisitPlan_controller_1.default.updateOne);
app.delete('/weeklyVisitPlan/:id', weeklyVisitPlan_controller_1.default.deleteOne);
//Monthly Visit Plan
app.post('/monthlyVisitPlan/create', monthlyVisitPlan_controller_1.default.create);
app.get('/monthlyVisitPlan', monthlyVisitPlan_controller_1.default.getAll);
app.get('/monthlyVisitPlan/employee/:id', monthlyVisitPlan_controller_1.default.getAllByEmployeeId);
app.get('/monthlyVisitPlan/:id', monthlyVisitPlan_controller_1.default.getOne);
app.put('/monthlyVisitPlan/:id', monthlyVisitPlan_controller_1.default.updateOne);
app.delete('/monthlyVisitPlan/:id', monthlyVisitPlan_controller_1.default.deleteOne);
app.post('/salesInvoice/create', salesInvoice_controller_1.default.create);
app.get('/salesInvoice', salesInvoice_controller_1.default.getAll);
app.get('/salesInvoice/employee/:id', salesInvoice_controller_1.default.getAllByEmployeeId);
app.get('/salesInvoice/:id', salesInvoice_controller_1.default.getOne);
app.put('/salesInvoice/:id', salesInvoice_controller_1.default.updateOne);
app.delete('/salesInvoice/:id', salesInvoice_controller_1.default.deleteOne);
app.post('/monthlyTarget/create', monthlyTarget_controller_1.default.create);
app.get('/monthlyTarget', monthlyTarget_controller_1.default.getAll);
app.get('/monthlyTarget/employee/:id', monthlyTarget_controller_1.default.getAllByEmployeeId);
app.get('/monthlyTarget/:id', monthlyTarget_controller_1.default.getOne);
app.put('/monthlyTarget/:id', monthlyTarget_controller_1.default.updateOne);
app.delete('/monthlyTarget/:id', monthlyTarget_controller_1.default.deleteOne);
app.get("/hello", (req, res) => {
    res.send("This is your hello message");
});
exports.default = app;
//# sourceMappingURL=app.js.map