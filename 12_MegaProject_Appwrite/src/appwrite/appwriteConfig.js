import config from "../config/config.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteProjectId)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // createPost
  async createPost({ title, content, featuredImage, status }) {
    try {
      return await databases.createDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug, // documentId
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(`Appwrite Service :: createPost :: error `, error);
    }
  }

  // updatePost
  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug, // documentId
        {
          title,
          content,
          featuredImage,
          status,
        } // data (optional)
      );
    } catch (error) {
      console.log(`Appwrite Service :: upfacePost :: error `);
    }
  }

  // deletePost
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug // documentId
      );
      return true;
    } catch (error) {
      console.log(`Appwrite Service :: deletePost :: error `);
      return false;
    }
  }

  // Get a post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug // documentId
      );
    } catch (error) {
      console.log(`Appwrite Service :: getPost :: error `);
      return false;
    }
  }

  // Get all posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        queries // queries
      );
    } catch (error) {
      console.log(`Appwrite Service :: getPosts :: error `);
      return false;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
        // document.getElementById('uploader').files[0]
      );
    } catch (error) {
      console.log(`Appwrite Service :: uploadFile :: error `);
      return false;
    }
  }

  // delete file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appwriteBucketId, // bucketId
        fileId // fileId
      );
      return true;
    } catch (error) {
      console.log(`Appwrite Service :: deleteFile :: error `);
      return false;
    }
  }

  // file preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      config.appwriteBucketId, // bucketId
      fileId // fileId
      /*
        0, // width (optional)
        0, // height (optional)
        ImageGravity.Center, // gravity (optional)
        0, // quality (optional)
        0, // borderWidth (optional)
        '', // borderColor (optional)
        0, // borderRadius (optional)
        0, // opacity (optional)
        -360, // rotation (optional)
        '', // background (optional)
        ImageFormat.Jpg // output (optional)
        */
    );
  }

  
}

const service = new Service();
export default service;
