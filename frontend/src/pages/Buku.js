import React from "react";
import axios from "axios";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class Buku extends React.Component {
  constructor() {
    super();
    this.state = {
      buku: [],
      isbn: "",
      judul: "",
      penulis: "",
      penerbit: "",
      harga: 0,
      cover: "",
      aksi: "",
      search: "",
    };
  }

  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  Add = () => {
    // mengosongkan isi variabel nip, nama, dan alamat
    // set action menjadi "insert"
    this.setState({
        isbn: "",
        judul: "",
        penulis: "",
        penerbit: "",
        harga: 0,
        cover: "",
        action: "insert"
    });
  }

  Edit = (item) => {
    /*
    - mengisikan isi variabel nip, nama, alamat sesuai dengan data yang
    akan diedit
    - set action menjadi "update"
    */
    this.setState({
        isbn: "",
        judul: "",
        penulis: "",
        penerbit: "",
        harga: 0,
        cover: "",
      action: "update"
    });
  }

  getBuku = () => {
    let url = "http://localhost:8000/book/getbook";
    // mengakses api untuk mengambil data buku
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array buku
      this.setState({buku: response.data.buku});
    })
    .catch(error => {
      console.log(error);
    });
  }

  findBuku = (event) => {
    let url = "http://localhost:8000/book";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search
      }
      // mengakses api untuk mengambil data buku
      // berdasarkan keyword
      axios.post(url, form)
      .then(response => {
        // mengisikan data dari respon API ke array buku
        this.setState({buku: response.data.buku});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  SaveBuku = (event) => {
    event.preventDefault();
    /* menampung data nip, nama dan alamat dari Form
    ke dalam FormData() untuk dikirim  */
    let url = "";
    if (this.state.action === "insert") {
      url = "http://localhost:8000/book/postbook"
    } else {
      url = "http://localhost:8000/book/updatedBook"
    }
    

    let form = {
      nip: this.state.nip,
      nama: this.state.nama,
      alamat: this.state.alamat
    }

    // mengirim data ke API untuk disimpan pada database
    axios.post(url, form)
    .then(response => {
      // jika proses simpan berhasil, memanggil data yang terbaru
      this.getBuku();
    })
    .catch(error => {
      console.log(error);
    });
    // menutup form modal
    $("#modal").modal('hide');
  }

  Drop = (nip) => {
    let url = "http://localhost:8000/buku/" + nip;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
      .then(response => {
        // jika proses hapus data berhasil, memanggil data yang terbaru
        this.getBuku();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  componentDidMount(){
    // method yang pertama kali dipanggil pada saat load page
    this.getBuku()
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="alert alert-info">
            <h3>Daftar Buku</h3>
          </div>
          <input
              type="text"
              className="form-control mb-2"
              name="search"
              value={this.state.search}
              onChange={this.bind}
              onKeyUp={this.findBuku}
              placeholder="Pencarian..."
            />
            {/* tampilan tabel buku */}
            <table className="table">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Judul</th>
                  <th>Penulis</th>
                  <th>Penerbit</th>
                  <th>Harga</th>
                  <th>Cover</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {this.state.buku.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.isbn}</td>
                      <td>{item.judul}</td>
                      <td>{item.penulis}</td>
                      <td>{item.penerbit}</td>
                      <td>{item.harga}</td>
                      <td>{item.cover}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-info m-1"
                          data-toggle="modal"
                          data-target="#modal"
                          onClick={() => this.Edit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger m-1"
                          onClick={() => this.Drop(item.nip)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              className="btn btn-success"
              onClick={this.Add}
              data-toggle="modal"
              data-target="#modal"
            >
              Tambah Data
            </button>
            {/* modal form buku */}
            <div className="modal fade" id="modal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">Form  Buku</div>
                  <form onSubmit={this.SaveBuku}>
                    <div className="modal-body">
                      NIP
                      <input
                        type="number"
                        name="nip"
                        value={this.state.nip}
                        onChange={this.bind}
                        className="form-control"
                        required
                      />
                      Nama
                      <input
                        type="text"
                        name="nama"
                        value={this.state.nama}
                        onChange={this.bind}
                        className="form-control"
                        required
                      />
                      Alamat
                      <input
                        type="text"
                        name="alamat"
                        value={this.state.alamat}
                        onChange={this.bind}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-sm btn-success" type="submit">
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Buku;