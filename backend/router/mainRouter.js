const express =require('express');
const { Insert, View,Dateinsert, InsertEvent, GetAllEvents, UpdateEvent } = require('../controller/dateController');

const router=express.Router();


router.post('/insert',Insert);
router.get('/view',View);
router.post('/dateInsert',Dateinsert)
router.post('/cal',InsertEvent);
router.get('/views', GetAllEvents);         // GET /api/cal
router.put('/update/:id', UpdateEvent);       // PUT /api/cal/:id




module.exports=router;