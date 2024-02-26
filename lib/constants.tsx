export const CompanyInfoHoverContent = {
  name: {
    first: "A company name may be in English or in Chinese. A company may also adopt both an English name and a Chinese name. Please refer to the 'Guideline on Registration of Company Names for Hong Kong Companies' for the points to note when choosing a company name.",
    second: "The company name(s) stated in this Section should be identical to the name(s) stated in the Name Clause of the articles of the company as required under section 81 of the Companies Ordinance. An application for incorporation with errors in the proposed company name(s) may be rejected by the Companies Registry and the lodgement fee paid will not be refunded."
  },
  type: "A company is a 'private company' if its articles restrict a member's right to transfer shares, limit the number of members to 50, and prohibit any invitation to the public to subscribe for any shares or debentures of the company; and it is not a company limited by guarantee. A company is a 'public company' if it is not a private company and not a company limited by guarantee. Please seek independent legal advice on the choice of an appropriate type of company, if necessary.",
  address: " Please provide the code and description of the nature of proposed business of the company in accordance with the categories of business nature which are available from the Companies Registry's website (www.cr.gov.hk). If the company proposes to carry on more than one category of business, please provide the major category.",
  time: "According to sections 5A(1) and 5D(2) of the Business Registration Ordinance (Cap. 310), an applicant for company incorporation must deliver a Notice to Business Registration Office (IRBR1) and the prescribed business registration fee and levy together with this form. Otherwise, the application will be rejected by the Companies Registry",
  presentor: "Please complete the Presentor's Reference. Unless the presentor needs to raise a specific issue for the attention of the Companies Registry, no covering letter is required. The Companies Registry will notify the presentor by email or fax to collect the Certificate of Incorporation and Business Registration Certificate in person. A written authorization will be required if the presentor sends a representative to collect the certificates."
}

export const notificationContent = [
  {
    title: "New Form Released!!",
    description: "Govt. has released a new form",
    date: "12 May, 2024",
  },
  {
    title: "Form Guidelines Released!!",
    description: "Govt. has released a new form guidelines",
    date: "11 May, 2024",
  },
  {
    title: "Delay in Form Submission!!",
    description: "Govt. has delayed a form submissions",
    date: "10 May, 2024",
  },
  {
    title: "Advisory for Fintech Companies!!",
    description: "Govt. has issued new advisory for Fintech Companies",
    date: "8 May, 2024",
  },
];

export const messagesContent = [
  {
    imgSrc: "/user/user-01.png",
    name: "Robert John",
    message: "Need Status Update on Upcoming Forms.",
    time: "2 mins ago",
  },
  {
    imgSrc: "/user/user-02.png",
    name: "Mariya Desoja",
    message: "Correction in the current form.",
    time: "5 mins ago",
  },
  {
    imgSrc: "/user/user-03.png",
    name: "Henry Dholi",
    message: "Why my projects are still pending ?",
    time: "10 mins ago",
  },
  {
    imgSrc: "/user/user-04.png",
    name: "Cody Fisher",
    message: "Project Status not Updating!!",
    time: "35 mins ago",
  },
  {
    imgSrc: "/user/user-05.png",
    name: "Harry Brooks",
    message: "Please update links so that I can redirect",
    time: "2 days ago",
  },
  {
    imgSrc: "/user/user-06.png",
    name: "Harry Williamson",
    message: "Regarding Form Guidelines",
    time: "3 days ago",
  },
];

export const classOfSharesContent = [
  {
    label: "Ordinary",
    value: "ordinary",
  },
  {
    label: "Preferance",
    value: "preferance",
  },
  {
    label: "Ordinary Class 1",
    value: "ordinary class 1",
  },
  {
    label: "Preferance Class A",
    value: "preferance class A",
  },
  {
    label: "Ordinary Class 2",
    value: "ordinary class 2",
  },
  {
    label: "Preferance Class B",
    value: "preferance class b",
  },
];

export const currencyContent = [
  "HKD",
  "USD",
  "EUR",
  "INR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "SEK",
  "NZD",
];

export const positionType = [
  {
    label: "Person",
    value: "person",
  },
  {
    label: "Body Corporate",
    value: "body-corporate",
  },
];

// Share Capital => Start-------------------------------------------------------------------
export const shareCapitalRows = [
  {
    label: "Class of Shares",
    for: "class",
  },
  {
    label: "Total Shares Proposed",
    for: "totalProposed",
  },
  {
    label: "Currency",
    for: "currency",
  },
  {
    label: "Unit Price of Share",
    for: "unitPrice",
  },
  {
    label: "Total Amount",
    for: "total",
  },
  {
    label: "Total Capital Subscribed",
    for: "paid",
  },
  {
    label: "Unpaid Amount",
    for: "unpaid",
  },
  {
    label: "Particulars of Rights Attached",
    for: "rightsAttached",
  },
];

export const shareCapitalContent = [
  {
    id: 1,
    class: "Ordinary",
    totalProposed: 1000,
    currency: "HKD",
    unitPrice: 1,
    total: 1000,
    paid: 200,
    unpaid: 800,
    rightsAttached: "Voting Rights",
  },
  {
    id: 2,
    class: "Preferance",
    totalProposed: 1000,
    currency: "USD",
    unitPrice: 1,
    total: 1000,
    paid: 200,
    unpaid: 800,
    rightsAttached: "Voting Rights",
  },
  {
    id: 3,
    class: "Ordinary Class 1",
    totalProposed: 1000,
    currency: "EUR",
    unitPrice: 1,
    total: 1000,
    paid: 0,
    unpaid: 0,
    rightsAttached: "Voting Rights",
  },
];
// Share Capital => End-------------------------------------------------------------------

// Shareholders => Start-------------------------------------------------------------------

export const shareholdersRows = [
  {
    label: "Person/Company",
    for: "type",
  },
  {
    label: "Surname",
    for: "surname",
  },
  {
    label: "Name",
    for: "name",
  },
  {
    label: "ID/Company No.",
    for: "idNo",
  },
  {
    label: "Address",
    for: "address",
  },
  {
    label: "Email",
    for: "email",
  },
  {
    label: "Phone",
    for: "phone",
  },
  {
    label: "Class of Shares",
    for: "classOfShares",
  },
  {
    label: "No. of Shares",
    for: "totalShares",
  },
];

export const shareholdersContent = [
  {
    id: 1,
    type: "Person",
    surname: "Kun Lee",
    name: "Chang",
    idNo: "313425",
    address: "16 Chi Street",
    email: "email1@gmail.com",
    phone: "+12XXXXXXXXXX",
    classOfShares: "Ordinary",
    noOfShares: 200,
  },
  {
    id: 2,
    type: "Company",
    surname: "-",
    name: "Tencent Games Pvt Ltd.",
    idNo: "313425",
    address: "16 Kinjuo Street",
    email: "email2@gmail.com",
    phone: "+01XXXXXXXXX",
    classOfShares: "Preferance",
    noOfShares: 200,
  },
  {
    id: 3,
    type: "Person",
    surname: "Minamoto",
    name: "Riotsu",
    idNo: "313425",
    address: "16 Saitichi Street",
    email: "email3@gmail.com",
    phone: "+91XXXXXXXXX",
    classOfShares: "Ordinary Class 1",
    noOfShares: 0,
  },
];

// Shareholders => End-------------------------------------------------------------------

// Directors => Start-------------------------------------------------------------------
export const directorsRows = [
  {
    label: "Person/Company",
    for: "type",
  },
  {
    label: "Surname",
    for: "surname",
  },
  {
    label: "Name",
    for: "name",
  },
  {
    label: "Email",
    for: "email",
  },
];

export const directorsContent = [
  {
    id: 1,
    type: "Person",
    surname: "Kun Lee",
    name: "Chang",
    email: "email1@gmail.com",
  },
  {
    id: 2,
    type: "Company",
    surname: "-",
    name: "Tencent Games Pvt Ltd.",
    email: "email2@gmail.com",
  },
  {
    id: 3,
    type: "Person",
    surname: "Minamoto",
    name: "Riotsu",
    email: "email3@gmail.com",
  },
];

// Directors => End-------------------------------------------------------------------

// Company Secretary => Start-------------------------------------------------------------------
export const companySecretaryRows = [
  {
    label: "Person/Company",
    for: "type",
  },
  {
    label: "Surname",
    for: "surname",
  },
  {
    label: "Name",
    for: "name",
  },
  {
    label: "Id No./Passport/Company No.",
    for: "id",
  },
];

export const companySecretaryContent = [
  {
    id: 1,
    type: "Person",
    surname: "Kun Lee",
    name: "Chang",
    idNo: "3132XXX216",
  },
  {
    id: 2,
    type: "Company",
    surname: "-",
    name: "Tencent Games Pvt Ltd.",
    idNo: "416XXX213",
  },
  {
    id: 3,
    type: "Person",
    surname: "Minamoto",
    name: "Riotsu",
    idNo: "713XXX316",
  },
];
