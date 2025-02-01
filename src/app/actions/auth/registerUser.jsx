"use server"

import dbConnect, { collectionObjects } from "@/lib/dbConnect";
import bcrypt from "bcrypt"

export const registerUser = async(payload) => {
    const userCollection = dbConnect(collectionObjects.userCollection)
    const user = await userCollection.findOne({email: payload.email});
    const {email, password} = payload;
    if(!email || !password) {
        return {success: false}
    }
    if(!user){
        const hasedPassword = await bcrypt.hash(password,10)
        payload.password = hasedPassword
        const result = await userCollection.insertOne(payload)
        const {acknowledged, insertedId} = result
        return {acknowledged, insertedId};
    }
    return  {success: false}
};

