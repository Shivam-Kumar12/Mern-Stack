const { z }= require("zod");

const loginSchema=z.object({
        email: z.string({required_error:"Email is Required"})
        .trim()
        .email({message:"Invalid email address"})
        .min(3,{message:"email must be at least of 3 character"})
        .max(255,{message:"email must not be more than 255 characters"}),
        
        password: z.string({required_error:"Password is Required"})
        .min(7,{message:"Password must be at least of 6 character"})
        .max(1024,{message:"Password must not be more than 1024 characters"})
})

const signupSchema = loginSchema.extend({

        username: z.string({required_error:"Name is Required"})
        .trim()
        .min(3,{message:"Name must be at least of 3 character"})
        .max(255,{message:"Name must not be more than 255 characters"}),
        
        email: z.string({required_error:"Email is Required"})
        .trim()
        .email({message:"Invalid email address"})
        .min(3,{message:"email must be at least of 3 character"})
        .max(255,{message:"email must not be more than 255 characters"}),

        phone: z.string({required_error:"Phone no is Required"})
        .trim()
        .min(3,{message:"Phoneno  must be at least of 10 character"})
        .max(20,{message:"Phoneno  must not be more than 20 characters"}),

        password: z.string({required_error:"Password is Required"})
        .min(7,{message:"Password must be at least of 6 character"})
        .max(1024,{message:"Password must not be more than 1024 characters"})
    
    
     
}); 

module.exports={signupSchema,loginSchema};