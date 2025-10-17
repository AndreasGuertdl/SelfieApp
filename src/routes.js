import { createTable, insertPessoa, selectPessoas, selectPessoa, deletePessoa, updatePessoa } from './Controller/Pessoa.js';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    });
});

router.all('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa)

export default router;