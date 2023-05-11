import { LandLord } from "../../Models/LandLord";
import { Lease } from "../../Models/Lease";
import { Units } from "../../Models/Unit";


export interface PropertiesResponse{
    propertyId: string;
    name: string;
    leaseId: string;
    address: string;
    city: string;
    status: boolean;
    isDeleted: boolean;
    zipcode: number;
    numOfUnits: number;
    price: number;
    units?: Units;
    landLord?: LandLord;
    landLordId: string;
    image: string;
    lease?: Lease;
}

