const Contact=require("../Models/Contact-models")
const ContactForm = async (req, res) => {
try {
    const Response=req.body;
    await Contact.create(Response)
    return res.status(200).json({ msg: "message Send successfully" })
} catch (error) {
    return res.status(400).json({ msg: "message not delivered" })
}

}
module.exports=ContactForm