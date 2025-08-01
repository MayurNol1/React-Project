import conf from "../conf"
import { Client,ID,Databases,Storage,Query } from "appwrite"

export class Service{
    client = new Client();
        databases;
        storage;
        
    constructor(){
        this.client
            .setEndpoint(conf.AppwriteUrl)
            .setProject(conf.ProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

     async creatPost({title,slug,content,featuredImage,status,userId}) {
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )

        }catch(err){
            throw err;
        }
        
    }

     async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                })
        }catch(err){
            throw err;
        }
    }

         async deletePost(slug){
        try{
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                 slug 
        )
        return true;
        }catch(err){
            throw err;
        }
    }

     async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                 slug 
        )
        return true;
        }catch(err){
            throw err;
        }
    }

     async getPost(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                 queries
        )
        return true;
        }catch(err){
            throw err;
        }
    }


    // File upload services

    async uploadFile(file){
        try{
             await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(err){
            throw err;
        }
    }

     async deleteFile(fileId){
        try{
             await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        }catch(err){
            throw err;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

   

const service=new Service();
export default service;