import {Router, Request, Response} from "express";

export  const router = Router();


router.get('/mensajes', (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
})



router.post('/mensajes', (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        mensaje: 'POST-LISTO'
    });
})
