import express from "express";
import cors from "cors";

const app = express()

const port = 5500

app.use(express.json({limit: "50mb"}))
app.use(cors())
app.post("/auth/sign-in",(req,res) => {
        console.log(req.body)
        res.status(200),
        res.send({"token":"logueado"})
}
)

app.put("/light",(req,res) =>{
    console.log(req.body)
    res.send();
})

    app.listen(port, ()=> {
        console.log('El servidor esta escuchando el puerto 5500 ')
    })
