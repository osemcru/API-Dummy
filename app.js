import express from "express";
import cors from "cors";

const app = express()

const port = 5500

app.use(express.json({limit: "50mb"}))
app.use(cors({origin:"*"}))
app.post("/auth/sign-in",(req,res) => {


    if(req.body ){
        console.log(req.body)
        res.status(200),
        res.send({"token":"logueado"})
}/*else{
        console.log('Credenciales incorrectas')
        res.status(404),
        res.send()
    }*/
}
)

app.put("/light",(req,res) =>{
    console.log(req.body.power)
    res.status(204);
})

    app.listen(port, ()=> {
        console.log('El servidor esta escuchando el puerto 5500 ')
    })