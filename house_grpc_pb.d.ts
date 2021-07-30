// package: houseservice
// file: house.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as house_pb from "./house_pb";

interface IhouseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHousesBySize: IhouseServiceService_IGetHousesBySize;
    getHouse: IhouseServiceService_IGetHouse;
    getHouses: IhouseServiceService_IGetHouses;
}

interface IhouseServiceService_IGetHousesBySize extends grpc.MethodDefinition<house_pb.HousesBySizeRequest, house_pb.HousesBySizeResponse> {
    path: "/houseservice.houseService/GetHousesBySize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<house_pb.HousesBySizeRequest>;
    requestDeserialize: grpc.deserialize<house_pb.HousesBySizeRequest>;
    responseSerialize: grpc.serialize<house_pb.HousesBySizeResponse>;
    responseDeserialize: grpc.deserialize<house_pb.HousesBySizeResponse>;
}
interface IhouseServiceService_IGetHouse extends grpc.MethodDefinition<house_pb.HouseRequest, house_pb.HouseResponse> {
    path: "/houseservice.houseService/GetHouse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<house_pb.HouseRequest>;
    requestDeserialize: grpc.deserialize<house_pb.HouseRequest>;
    responseSerialize: grpc.serialize<house_pb.HouseResponse>;
    responseDeserialize: grpc.deserialize<house_pb.HouseResponse>;
}
interface IhouseServiceService_IGetHouses extends grpc.MethodDefinition<house_pb.HousesRequest, house_pb.HousesResponse> {
    path: "/houseservice.houseService/GetHouses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<house_pb.HousesRequest>;
    requestDeserialize: grpc.deserialize<house_pb.HousesRequest>;
    responseSerialize: grpc.serialize<house_pb.HousesResponse>;
    responseDeserialize: grpc.deserialize<house_pb.HousesResponse>;
}

export const houseServiceService: IhouseServiceService;

export interface IhouseServiceServer {
    getHousesBySize: grpc.handleUnaryCall<house_pb.HousesBySizeRequest, house_pb.HousesBySizeResponse>;
    getHouse: grpc.handleUnaryCall<house_pb.HouseRequest, house_pb.HouseResponse>;
    getHouses: grpc.handleUnaryCall<house_pb.HousesRequest, house_pb.HousesResponse>;
}

export interface IhouseServiceClient {
    getHousesBySize(request: house_pb.HousesBySizeRequest, callback: (error: grpc.ServiceError | null, response: house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    getHousesBySize(request: house_pb.HousesBySizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    getHousesBySize(request: house_pb.HousesBySizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    getHouse(request: house_pb.HouseRequest, callback: (error: grpc.ServiceError | null, response: house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    getHouse(request: house_pb.HouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    getHouse(request: house_pb.HouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    getHouses(request: house_pb.HousesRequest, callback: (error: grpc.ServiceError | null, response: house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    getHouses(request: house_pb.HousesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    getHouses(request: house_pb.HousesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
}

export class houseServiceClient extends grpc.Client implements IhouseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getHousesBySize(request: house_pb.HousesBySizeRequest, callback: (error: grpc.ServiceError | null, response: house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    public getHousesBySize(request: house_pb.HousesBySizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    public getHousesBySize(request: house_pb.HousesBySizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    public getHouse(request: house_pb.HouseRequest, callback: (error: grpc.ServiceError | null, response: house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    public getHouse(request: house_pb.HouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    public getHouse(request: house_pb.HouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    public getHouses(request: house_pb.HousesRequest, callback: (error: grpc.ServiceError | null, response: house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    public getHouses(request: house_pb.HousesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    public getHouses(request: house_pb.HousesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
}
