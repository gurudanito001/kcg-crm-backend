


namespace Interfaces {
  export interface Company {
    id: string,
    group: string,
    code: string,
    name: string,
    logo?: string,
    email: string,
    brands: string[],
    extraData: object,
    createdAt?: string,
    updatedAt?: string
  }
  export interface Branch {
    id: string,
    companyId: string,
    code: string,
    name: string,
    locationName: string,
    address: string,
    extraData: object,
    created_at?: string,
    updated_at?: string
  }
  export interface ProductGroup { // aka brands
    id: string,
    name: string,
    code: string,
    description: string,
    extraData: object,
    created_at?: string,
    updated_at?: string
  }
  interface Product {
    id: string,
    name: string,
    code: string,
    productGroupId: string,
    description: string,
    unitOfMeasurement: string,
    specifications: string,
    brochure: string,
    images: string[],
    listPriceForProduct: object[],
    vatInclusive: boolean,
    vatRate: string,
    extraData: object,
    created_at?: string,
    updated_at?: string
  }
  export interface StaffCadre {
    id: string,
    name: string,
    code: string,
    description: string,
    created_at?: string,
    updated_at?: string,
  }
  export interface Employee {
    id: string,
    companyId: string,
    branchId: string,
    staffCadre: string
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    supervisor: string,
    productHead: string,
    locationManager: string,
    subordinate: string,
    employmentDate: string,
    brandsAssigned: string,
    created_at?: string,
    updated_at?: string,
  }
  
  
  export interface Customer {
    id?: string,
    companyName: string,
    state: string,
    lga: string,
    city: string,
    Address1: string,
    Address2: string,
    companyWebsite: string,
    chairman: string,
    mdCeoName: string,
    industry: string,
    businessType: string,
    customerType: string,
    enquirySource: string
    contactPersons: ContactPerson[],
    created_at?: string,
    updated_at?: string,
  }
  
  export interface ContactPerson {
    id: string,
    employeeId: string
    customerId: string,
    firstname: string,
    lastname: string,
    email: string,
    title: string,
    designation: string,
    department: string
    phoneNumber1: string,
    phoneNumber2: string,
    role: string
  }

  export interface CustomerVisit {
    id: string
    employeeId: string
    customerId: string,
    personToVisit: ContactPerson,
    meetingDate: string,
    meetingPurpose: string,
    meetingVenue: string,
    visited: boolean
  }
  
  export interface CustomerVisitReport {
    id?: string,
    customerVisit: CustomerVisit
    callType: string,
    status: string,
    productDiscussed: Product,
    price: string,
    quantity: string,
    durationOfMeeting: string,
    meetingOutcome: string,
    nextVisit: CustomerVisit
    pfiRequest: boolean
    created_at?: string,
    updated_at?: string,
  }
  
  export interface PfiRequestForm {
    id?: string,
    companyName: string,
    contactPerson: string,
    mobile: string
    companyAddress: string
    emailAddress: string
    productBrand: string
    vehicleModel: string
    bodyTypeDescription: string
    vehicleServiceDetails: string
    bodySpecialFitmentDetails: string
    costOfBodySpecialFitment: string
    quantity: string
    priceOfVehicle: string
    discount: string
    vatDeduction: boolean
    whtDeduction: boolean
    refundRebaseAmount: string,
    refundRebaseRecipient: string,
    registration: boolean,
    designation: string,
    relationshipWithTransaction: string,
    estimatedOrderClosingTime: string,
    deliveryPeriod: string,
    paymentType: string,
    deliveryLocation: string,
    additionalInformation: string
    created_at?: string,
    updated_at?: string,
  }
  
  export interface InvoiceRequestForm {
    id?: string,
    invoiceName: string
    address1: string
    address2: string
    contactPerson: string
    contactOfficeTelephone: string
    email: string
    salesThru: string
    industry: string
    businessType: string
    kycId: string
    vehicleDetails: string
    quantity: string
    colour: string
    totalInvoiceValuePerVehicle: string
    typeOfBodyBuilding: string
    bodyFabricatorName: string
    expectedDeliveryDate: string
    deliveryLocation: string
    registration: string
    delivery: string
    vatDeduction: boolean
    whtDeduction: boolean
    paymentStatus: string
    LPO: string
    warrantyCertificate: string
    agreedCreditPeriod: string,
    rebateReceiver: string,
    rebateAmount: string,
    relationshipWithTransaction: string,
    accountDetailsToTransfer: object
    refundToCustomer: string
    servicePackageDetails: string
    approvedBy: Employee
    additionalInformation: string
    created_at?: string,
    updated_at?: string,
  }
  
  export interface VehicleDelivery {
    id?: string
    customerName: string
    customerAddress: string
    invoiceNumber: string
    deliveryNoteNumber: string
    chasisNumber: string
    bodyBuilding: string
    totalOrderQuantity: string
    quantityDelivered: string
    quantityPending: string
    nameOfDriver: string
    vehicleRecipientName: string
    vehicleRecipientPhone: string
    receiverRelationshipWithBuyer: string
    additionalInformation: string
    created_at?: string,
    updated_at?: string,
  }
  
  export interface Payment {
    id: string
    invoiceNumber: string
    invoiceDate: string
    deliveryDate: string
    nameOfCustomer: string
    customerAddress: string
    modelOfVehiclePurchased: string
    quantityPurchased: string
    advancePaymentReceived: string
    outstandingAmount: string
    vatDeducted: string
    whtDeducted: string
    vatPaymentReceipt: string
    additionalInformation: string
    created_at?: string,
    updated_at?: string,
  }

  export interface MarketingActivity {
    id?: string
    marketingActivityName: string
    activityDate: string
    participants: Employee[]
    location: string
    objective: string
    targetResult: string
    briefReport: string
    pictures: string[]
    costIncurred: string
    uploadFile: string
  }

  export interface VisitPlan {
    id?: string
    employee: Employee
    weeklyVisitPlan: object
    monthlyVisitPlan: object
  }

  export type EmployeeTypes =  "Administrator" | "Supervisor" | "Sales Person"

  export interface TokenData {
    userId: string
    email: string
    expires?: any
    type: string
    secret: string
    staffCadre?: string
  }
}

export default Interfaces

