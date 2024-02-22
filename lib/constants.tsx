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
    label: "ID Proof",
    for: "idProof",
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
    email: "email1@gmail.com",
    classOfShares: "Ordinary",
    noOfShares: 200,
  },
  {
    id: 2,
    type: "Company",
    surname: "-",
    name: "Tencent Games Pvt Ltd.",
    email: "email2@gmail.com",
    classOfShares: "Preferance",
    noOfShares: 200,
  },
  {
    id: 3,
    type: "Person",
    surname: "Minamoto",
    name: "Riotsu",
    email: "email3@gmail.com",
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
