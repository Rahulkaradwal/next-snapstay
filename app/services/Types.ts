// export interface Cabin {
//   id: string;
//   name: string;
//   description: string;
//   regularPrice: number;
//   discount: number;
//   images: string[];
// }

// // Define the structure for the success response
// export interface GetCabinSuccessResponse {
//   status: "success";
//   data: Cabin;
// }

// // Define the structure for the error response
// export interface ErrorResponse {
//   status: "error";
//   message: string;
// }

// // Response data structure for the POST request to create an account

// export type ResponseSignup = {
//   status: string;
//   message: string;
// };

// export type WithoutPayBookingFormData = {
//   startDate: Date;
//   endDate: Date;
//   numGuests: number;
//   observations: string;
//   breakfast: boolean;
//   numNights: number;
//   isPaid: boolean;
//   cabin: string;
//   guest: string;
//   totalPrice: number;
//   extraPrice: number;
//   cabinPrice: number;
// };

// export type BookingSettings = {
//   breakfastPrice: number;
//   createdAt: string;
//   _id: string;
//   maxBookingLength: number;
//   maxGuestPerBooking: number;
//   minBookingLength: number;
// };

// export type CabinResponse = {
//   bookingSettings: BookingSettings;
//   description: string;
//   discount: number;
//   image: string;
//   createdAt: string;
//   maxCapacity: number;
//   name: string;
//   regularPrice: number;
//   _id: string;
//   bookedDates?: BookedDate[];
// };

// export type BookedDate = {
//   startDate: string;
//   endDate: string;
// };

// export type Guest = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
//   nationality?: string;
//   id: string;
// };

// export type LoginResponse = {
//   data: Guest;
//   status: string;
//   token: string;
// };

// export type BookingData = {
//   cabin: CabinResponse;
//   guest: Guest;
//   cabinPrice: number;
//   createdAt: string;
//   _id: string;
//   endDate: string;
//   extraPrice: number;
//   hasBreakfast: boolean;
//   isPaid: boolean;
//   numGuests: number;
//   numNights: number;
//   observations: string;
//   startDate: string;
//   totalPrice: number;
//   status: string;
//   __v?: number;
// };

// export type BookingResponse = {
//   status: string;
//   data: BookingData[];
// };

// export type BookingType = {
//   data: BookingData;
//   status: string;
// };

// export type BookingFormValues = {
//   startDate: string;
//   endDate: string;
//   numGuests: number;
//   breakfast: boolean;
//   observations: string;
// };

// // response struction for verification email

// export type LoaderData = {
//   status: string;
//   message: string;
// };

export type CabinResponse = {
  status: string;
  totalResults: number;
  data: Cabin[];
};
export type Response = {
  status: string;
  totalResults: number;
  data: Cabin;
};

export type Cabin = {
  bookingSettings?: BookingSettings;
  description: string;
  discount: number;
  image: string;
  createdAt: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
  _id: string;
  bookedDates?: BookedDate[];
};

export type BookedDate = {
  startDate: string;
  endDate: string;
};

export type BookingSettings = {
  breakfastPrice: number;
  createdAt: string;
  _id: string;
  maxBookingLength: number;
  maxGuestPerBooking: number;
  minBookingLength: number;
};
