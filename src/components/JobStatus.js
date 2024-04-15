import React, { useState } from "react";
import Select from "react-select";
import "./CSS/JobStatus.css";


//Org Name Filter

const options001 = [
  { value: "Nespresso", label: "Nespresso" },
  { value: "Zenus Inc", label: "Zenus Inc" },
  { value: "Califia Farms LLC", label: "Califia Farms LLC" },
  { value: "Weber-Stephen Products LLC", label: "Weber-Stephen Products LLC" },
  { value: "Barilla America, Inc", label: "Barilla America, Inc" },
  { value: "Zagg", label: "Zagg" },
  { value: "Olaplex LLC", label: "Olaplex LLC" },
  { value: "Kraft Foods", label: "Kraft Foods" },
  { value: "Nespresso LLC", label: "Nespresso LLC" },
];


// Job Priority

const options0001 = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
  { value: "Re-Run", label: "Re-Run" },
];

//Job Status

const options0002 = [
  { value: "No Findings", label: "No Findings" },
  {
    value: "Waiting for Invoice Trigger",
    label: "Waiting for Invoice Trigger",
  },
  {
    value: "Invoice Creation in Progress",
    label: "Invoice Creation in Progress",
  },
  {
    value: "Waiting for Batch payement Due",
    label: "Waiting for Batch payement Due",
  },
  {
    value: "Payement Matching in Progress",
    label: "Payement Matching in Progress",
  },
  { value: "Final Payement Matching", label: "Final Payement Matching" },
  { value: "No Recoupment", label: "No Recoupment" },
];


//Business Unit Filter 

const options0003 = [
  { value: "US-Nespresso Pods", label: "US-Nespresso Pods" },
  { value: "US-Zenus Inc", label: "US-Zenus Inc" },
  { value: "AU-Califia Farms", label: "AU-Califia Farms" },
  { value: "US-Califia Farms (Grocery)", label: "US-Califia Farms (Grocery)" },
  { value: "AU-Nespresso Pods", label: "AU-Nespresso Pods" },
  { value: "US-Weber Stephen Comapny", label: "US-Weber Stephen Comapny" },
  { value: "GB-Califia Farms UK Limited", label: "GB-Califia Farms UK Limited" },
  { value: "US-Barilla Pasta", label: "US-Barilla Pasta" },
  { value: "US-Mophie", label: "US-Mophie" },
  { value: "US-Olaplex LLC", label: "US-Olaplex LLC" },
  { value: "IT-OLAPLEX INC.IT", label: "IT-OLAPLEX INC.IT" },
  { value: "US-Kraft Foods", label: "US-Kraft Foods" },
  { value: "FR-Olaplex-FR Beauty", label: "FR-Olaplex-FR Beauty" },
  { value: "US-Nespresso Veg", label: "US-Nespresso Veg" },
  { value: "CA-Morphie", label: "CA-Morphie" },
  { value: "CA-Olaplex LLC", label: "CA-Olaplex LLC" },
  { value: "ES-Olaplex,INC.ES", label: "ES-Olaplex,INC.ES" },
  { value: "AU-Olaplex", label: "AU-Olaplex" },
  { value: "DE-Olaplex", label: "DE-Olaplex" },
];

const data = [
  {
    id: 1,
    OrganizationName: "Nespresso",
    VendorCentralName: "US-Nespresso Pods",
    AuditStartDate: "12/04/23",
    LastActivity: "12/07/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Payement matching in Progress",
    JobPriority: "High",
    Status: "Pending",
  },
  {
    id: 2,
    OrganizationName: "Zenus Inc",
    VendorCentralName: "US-Zenus Inc",
    AuditStartDate: "12/07/23",
    LastActivity: "12/07/23",
    NeedTobeInvoicedAmount: "$5,305,506.95",
    InvoiceSubmitted: "$5,080,717.75",
    InvoiceCreationDate: "10/17/23",
    ExpectedPaymentDueDate: "11/05/23",
    CronTriggerDate: "11/07/23",
    JobStatus: "Waiting For Batch Payement Due",
    JobPriority: "Medium",
    Status: "Paused",
  },
  {
    id: 3,
    
    OrganizationName: "Nespresso",
    VendorCentralName: "US-Nespresso Pods",
    AuditStartDate: "12/04/23",
    LastActivity: "12/07/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Payement matching in Progress",
    JobPriority: "High",
    Status: "Pending",
  },
  {
    id: 4,
    
    OrganizationName: "Califia Farms LLC",
    VendorCentralName: "AU-Califia Farms",
    AuditStartDate: "08/07/23",
    LastActivity: "11/05/23",
    NeedTobeInvoicedAmount: "$375,506.95",
    InvoiceSubmitted: "$50,117.25",
    InvoiceCreationDate: "09/01/23",
    ExpectedPaymentDueDate: "09/15/23",
    CronTriggerDate: "09/25/23",
    JobStatus: "Payement matching in Progress",
    JobPriority: "High",
    Status: "Paused",
  },
  {
    id: 5,
    
    OrganizationName: "Califia Farms LLC",
    VendorCentralName: "US-Califia Farms (Grocery)",
    AuditStartDate: "03/27/23",
    LastActivity: "11/05/23",
    NeedTobeInvoicedAmount: "$2,375,506.95",
    InvoiceSubmitted: "$1,980,117.25",
    InvoiceCreationDate: "04/04/23",
    ExpectedPaymentDueDate: "04/25/23",
    CronTriggerDate: "04/30/23",
    JobStatus: "Waiting For Invoice Trigger",
    JobPriority: "Low",
    Status: "Completed",
  },
  {
    id: 6,
    
    OrganizationName: "Califia Farms LLC",
    VendorCentralName: "AU-Nespresso Pods",
    AuditStartDate: "09/04/23",
    LastActivity: "07/05/23",
    NeedTobeInvoicedAmount: "$1,255,506.95",
    InvoiceSubmitted: "$1,030,117.87",
    InvoiceCreationDate: "11/01/23",
    ExpectedPaymentDueDate: "11/15/23",
    CronTriggerDate: "11/17/23",
    JobStatus: "Final Payement Matching",
    JobPriority: "High",
    Status: "Pending",
  },
  {
    id: 7,
    
    OrganizationName: "Weber-Stephen Products LLC",
    VendorCentralName: "US-Weber Stephen Comapny",
    AuditStartDate: "05/05/23",
    LastActivity: "07/05/23",
    NeedTobeInvoicedAmount: "$975,506.95",
    InvoiceSubmitted: "$700,577.58",
    InvoiceCreationDate: "05/10/23",
    ExpectedPaymentDueDate: "05/15/23",
    CronTriggerDate: "05/21/23",
    JobStatus: "No Findings",
    JobPriority: "Low",
    Status: "Completed",
  },
  {
    id: 8,
    
    OrganizationName: "Califia Farms LLC",
    VendorCentralName: "GB-Califia Farms UK Limited",
    AuditStartDate: "06/29/23",
    LastActivity: "07/05/23",
    NeedTobeInvoicedAmount: "$2,500,506.95",
    InvoiceSubmitted: "$1,998,117.25",
    InvoiceCreationDate: "07/01/23",
    ExpectedPaymentDueDate: "07/15/23",
    CronTriggerDate: "07/20/23",
    JobStatus: "No Recoupement",
    JobPriority: "Medium",
    Status: "Pending",
  },
  {
    id: 9,
    
    OrganizationName: "Barilla America, Inc",
    VendorCentralName: "US-Barilla Pasta",
    AuditStartDate: "12/04/23",
    LastActivity: "06/05/23",
    NeedTobeInvoicedAmount: "$1,305,506.95",
    InvoiceSubmitted: "$1,060,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Waiting For Invoice Trigger",
    JobPriority: "High",
    Status: "Paused",
  },
  {
    id: 10,
    OrganizationName: "Zagg",
    VendorCentralName: "US-Mophie",
    AuditStartDate: "10/04/23",
    LastActivity: "04/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "10/01/23",
    ExpectedPaymentDueDate: "10/15/23",
    CronTriggerDate: "10/27/23",
    JobStatus: "Payement matching in Progress",
    JobPriority: "High",
    Status: "Completed",
  },
  {
    id: 11,
    
    OrganizationName: "Olaplex LLC",
    VendorCentralName: "US-Olaplex LLC",
    AuditStartDate: "01/04/23",
    LastActivity: "04/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "01/07/23",
    ExpectedPaymentDueDate: "01/15/23",
    CronTriggerDate: "01/27/23",
    JobStatus: "No Recoupement",
    JobPriority: "Medium",
    Status: "Completed",
  },
  {
    id: 12,
    
    OrganizationName: "Olaplex LLC",
    VendorCentralName: "IT-OLAPLEX INC.IT",
    AuditStartDate: "12/04/23",
    LastActivity: "04/12/23",
    NeedTobeInvoicedAmount: "$2,375,506.95",
    InvoiceSubmitted: "$2,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Waiting For Batch Payement Due",
    JobPriority: "Low",
    Status: "Paused",
  },
  {
    id: 13,
    
    OrganizationName: "Kraft Foods",
    VendorCentralName: "US-Kraft Foods",
    AuditStartDate: "12/04/23",
    LastActivity: "04/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Invoice Creation in Progress",
    JobPriority: "Medium",
    Status: "Paused",
  },
  {
    id: 14,
    
    OrganizationName: "Olaplex LLC",
    VendorCentralName: "FR-Olaplex-FR Beauty",
    AuditStartDate: "12/04/23",
    LastActivity: "12/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Payement matching in Progress",
    JobPriority: "Low",
    Status: "Pending",
  },
  {
    id: 15,
    
    OrganizationName: "Nespresso LLC",
    VendorCentralName: "US-Nespresso Veg",
    AuditStartDate: "12/04/23",
    LastActivity: "12/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Payement matching in Progress",
    JobPriority: "High",
    Status: "Pending",
  },
  {
    id: 16,
    
    OrganizationName: "Zagg",
    VendorCentralName: "CA-Morphie",
    AuditStartDate: "12/04/23",
    LastActivity: "12/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Waiting for Invoice Trigger",
    JobPriority: "High",
    Status: "Completed",
  },
  {
    id: 17,
    
    OrganizationName: "Olaplex LLC",
    VendorCentralName: "CA-Olaplex LLC",
    AuditStartDate: "12/04/23",
    LastActivity: "12/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Payement matching in Progress",
    JobPriority: "High",
    Status: "Pending",
  },
  {
    id: 18,
    OrganizationName: "Olaplex LLC",
    VendorCentralName: "ES-Olaplex,INC.ES",
    AuditStartDate: "12/04/23",
    LastActivity: "12/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "No Findings",
    JobPriority: "Medium",
    Status: "Low",
  },
  {
    id: 19,
    
    OrganizationName: "Olaplex LLC",
    VendorCentralName: "AU-Olaplex",
    AuditStartDate: "12/04/23",
    LastActivity: "12/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Waiting for Batch Payement due",
    JobPriority: "Low",
    Status: "Completed",
  },
  {
    id: 20,
    
    OrganizationName: "Olaplex LLC",
    VendorCentralName: "DE-Olaplex",
    AuditStartDate: "12/04/23",
    LastActivity: "12/12/23",
    NeedTobeInvoicedAmount: "$1,375,506.95",
    InvoiceSubmitted: "$1,000,117.25",
    InvoiceCreationDate: "12/01/23",
    ExpectedPaymentDueDate: "12/15/23",
    CronTriggerDate: "12/07/23",
    JobStatus: "Final Payement Matching",
    JobPriority: "High",
    Status: "Completed",
  },
];

const itemsPerPage = 10;

const JobStatus = () => {
  const [selectedOptions001, setSelectedOptions001] = useState("");
  const [selectedOptions0001, setSelectedOptions0001] = useState("");
  const [selectedOptions0002, setSelectedOptions0002] = useState("");
  const [selectedOptions0003, setSelectedOptions0003] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (selectedOptions001) => {
    setSelectedOptions001(selectedOptions001);
  };

  const handleChange0001 = (selectedOptions0001) => {
    setSelectedOptions0001(selectedOptions0001);
  };

  const handleChange0002 = (selectedOptions0002) => {
    setSelectedOptions0002(selectedOptions0002);
  };

  const handleChange0003 = (selectedOptions0003) => {
    setSelectedOptions0003(selectedOptions0003);
  };

  const filterData = () => {
    let filteredData = [...data];

    if (selectedOptions001.length > 0) {
      filteredData = filteredData.filter((row) =>
        selectedOptions001.some((opt) => row.OrganizationName === opt.value)
      );
    }

    if (selectedOptions0001.length > 0) {
      filteredData = filteredData.filter((row) =>
        selectedOptions0001.some((opt) => row.JobPriority === opt.value)
      );
    }

    if (selectedOptions0002.length > 0) {
      filteredData = filteredData.filter((row) =>
        selectedOptions0002.some((opt) => row.JobStatus === opt.value)
      );
    }

    if (selectedOptions0003.length > 0) {
      filteredData = filteredData.filter((row) =>
        selectedOptions0003.some((opt) => row.VendorCentralName === opt.value)
      );
    }

    return filteredData;
  };


  const createTableHeaders = () => {
    const keys = Object.keys(data[0]);
    const filteredKeys = keys.filter((key) => key !== "id");
    filteredKeys.unshift("Checkbox");
    return filteredKeys.map((key, index) => (
      <th key={index} style={{ border: '1px solid black', background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
        {key}
      </th>
    ));
  };


  const createTableRows = () => {
    const filteredData = filterData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = filteredData.slice(startIndex, endIndex);

    return slicedData.map((rowData , index) => (
      <tr key={rowData.id} style={{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' } }>
        <td style={{ border: '1px solid black' }}>
          <input type="checkbox" />
        </td>
        {Object.entries(rowData).map(
          ([key, value], index) => key !== "id" && <td key={index} style={{ border: '1px solid black' }}>{value}</td>
        )}
      </tr>
    ));
  };

  const totalPages = Math.ceil(filterData().length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="jobStatus-container">
      <div className="first-heading-job">
        <h1>Invoice Reconciliation Status</h1>
      </div>
      <div className="search-summary-job">
        <div className="search-reset-2-job">
          <div className="select-vendor-job">
            <Select
              options={options0003}
              value={selectedOptions0003}
              onChange={handleChange0003}
              isMulti={true}
              placeholder="Select Vendor Name"
              className="multi-select-bu"
            />
          </div>
          <div className="select-vendor-job-i">
            <Select
              options={options001}
              value={selectedOptions001}
              onChange={handleChange}
              placeholder="Select OrganizationName"
              isMulti={true}
              className="multi-select-on"
            />
          </div>
          <div className="select-vendor-job-ii">
            <Select
              options={options0002}
              value={selectedOptions0002}
              onChange={handleChange0002}
              placeholder="Select JobStatus"
              isMulti={true}
              className="multi-select-js"
            />
          </div>
          <div className="select-vendor-job-iii">
            <Select
              options={options0001}
              value={selectedOptions0001}
              onChange={handleChange0001}
              placeholder="Select JobPriority"
              isMulti={true}
              className="multi-select-jp"
            />
          </div>
        </div>
      </div>
      <div className="button-ic-job">
        <button className="search-jobstatus">Search</button>
        <button className="reset-jobstatus">Reset</button>
        <button className="export-jobstatus">Export</button>
      </div>
      <div className="table-container">
        <div className="table-scroll">
          <table border="1">
            <thead>
              <tr>{createTableHeaders()}</tr>
            </thead>
            <tbody>{createTableRows()}</tbody>
          </table>
        </div>
        <div className="pagination">
          <button
          className="prev-ic-job"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
          className="next-ic-job"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobStatus;
