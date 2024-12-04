import { Router } from "express";
import { getPlayer,getPlayerById,postPlayer,deletePlayer, updatePlayer } from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router()

router.get("/players",getPlayer);
router.post("/players",postPlayer);
router.delete("/players/:id",postPlayer);
router.patch("/players/:id",updatePlayer);
router.get("/players/:id",deletePlayer);


//a rota sempre vem de um controller
router.get("/clubs",getClubs);




export default router;