import mongoose from 'mongoose'
import { AggregationCursor, MongoClient } from 'mongodb'
import assert from 'assert'
import { cursorTo } from 'readline'

const connectDB = async (DATABASE_URL) => {
 try {
  const DB_OPTIONS = {
   dbName: 'Srvme'
   
  }
  await mongoose.connect(DATABASE_URL, DB_OPTIONS)
  console.log('Connected Successfully..')



  
 } catch (err) {
  console.log(err)
 }
}

export default connectDB