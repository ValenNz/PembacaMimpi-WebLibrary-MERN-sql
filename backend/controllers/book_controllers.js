const db = require("../config") 


exports.getAllBooks = async (req,res)=>{
	let sql = "select * from t_buku"
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                buku: result // isi data
            }            
        }
        res.json(response) // send response
    })
}


exports.postBook = async (req,res)=>{
	let data = {
        isbn: req.body.isbn,
        judul: req.body.judul,
        penulis: req.body.penulis,
        penerbit: req.body.penerbit,
        harga: req.body.harga,
        cover: req.body.cover,
    }
    let message = ""

    let sql = "insert into t_buku set ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row inserted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })


}