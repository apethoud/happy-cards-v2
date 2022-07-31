export const Users = [
  {
    id: 1,
    name: "Andrew",
    email: "andrew@email.com",
    created: "06/14/22",
    paymentInfo: {
      cardNumber: "****-****-****-3786",
      expirationDate: "04/15/24",
    },
  },
  {
    id: 2,
    name: "Marisela",
    email: "marisela@email.com",
    created: "09/03/21",
    paymentInfo: {
      cardNumber: "****-****-****-6114",
      expirationDate: "06/04/25",
    },
  },
];

export const SavedCards = [
  {
    id: 1,
    userId: 2,
    recipientName: "Tobias",
    recipientEmail: "tobias@email.com",
    holidayName: "New Years Eve",
    sendOn: "12/29/21",
  },
  {
    id: 2,
    userId: 1,
    recipientName: "Cameron",
    recipientEmail: "cameron@email.com",
    holidayName: "International Day of Friendship",
    sendOn: "05/07/22",
  },
  {
    id: 3,
    userId: 2,
    recipientName: "Erica",
    recipientEmail: "erica@email.com",
    holidayName: "Fourth of July",
    sendOn: "06/04/22",
  },
  {
    id: 4,
    userId: 2,
    recipientName: "Michelle",
    recipientEmail: "michelle@email.com",
    holidayName: "St. Patrick's Day",
    sendOn: "03/17/22",
  },
  {
    id: 5,
    userId: 1,
    recipientName: "Juan",
    recipientEmail: "juan@email.com",
    holidayName: "Father's Day",
    sendOn: "06/19/22",
  },
];
