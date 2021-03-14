package controller

import (
	"encoding/json" // package untuk enkode dan mendekode json menjadi struct dan sebaliknya
	"fmt"
	"log"
	"net/http" // digunakan untuk mengakses objek permintaan dan respons dari api
	"strconv"  // package yang digunakan untuk mengubah string menjadi tipe int

	"example.com/sia/models" // mode package dimana student didefinisikan

	"github.com/gorilla/mux" // digunakan untuk mendapatkan parameter dari router
	_ "github.com/lib/pq"    // postgres golang driver
)

type responseMajor struct {
	ID      int64  `json:"id,omitempty"`
	Message string `json:"message,omitempty"`
}

type ResponseMajor struct {
	Status  int            `json:"status"`
	Message string         `json:"message"`
	Data    []models.Major `json:"data"`
}

func AddMajor(w http.ResponseWriter, r *http.Request) {

	// buat empty student dengan tipe model.Student_Model
	var major models.Major

	// decode data json request ke student
	err := json.NewDecoder(r.Body).Decode(&major)

	if err != nil {
		log.Fatalf("Tidak Bisa mendecode dari request body. %v", err)
	}

	// panggil models lalu insert student
	insertID := models.AddMajor(major)

	// format response objectnya
	res := response{
		ID:      insertID,
		Message: "Data student telah ditambahkan",
	}

	// kirim response
	json.NewEncoder(w).Encode(res)
}

// get student single data dengan parameter id nya
func GetMajor(w http.ResponseWriter, r *http.Request) {
	//set headernya
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	//dapatkan id major dari parameter request, keynya adalah id
	params := mux.Vars(r)

	//konversi id dari string ke int
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		log.Fatalf("Tidak bisa mengubah dari string ke int. %v", err)
	}

	//memanggil models getOneStudent dengan parameter id yang nantinya akan mengambil single data
	major, err := models.GetOneMajor(int64(id))

	if err != nil {
		log.Fatalf("Tidak bisa mengambil data studen. %v", err)
	}

	//kirim response
	json.NewEncoder(w).Encode(major)
}

// ambil semua data major
func GetAllMajor(w http.ResponseWriter, r *http.Request) {
	//set headernya
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// memanggil models getAllMajor
	majors, err := models.GetAllMajor()

	if err != nil {
		log.Fatalf("Tidak bisa mengambil data. %v", err)
	}

	var response ResponseMajor
	response.Status = 1
	response.Message = "Success"
	response.Data = majors

	// kirim semua response
	json.NewEncoder(w).Encode(response)
}

func UpdateMajor(w http.ResponseWriter, r *http.Request) {
	//ambil request parameter idnya
	params := mux.Vars(r)

	// konversikan ke int yang sebelumnya adalah string
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		log.Fatalf("Tidak bisa merubah dari string ke int. %v", err)
	}

	//  buat variable student dengan type models.Student_Model
	var major models.Major

	// decode json request ke variable student
	err = json.NewDecoder(r.Body).Decode(&major)

	if err != nil {
		log.Fatalf("Tidak bisa decode dengan request body. %v", err)
	}

	// panggil updateStudent untuk mengupdate data
	updateRows := models.UpdateMajor(int64(id), major)

	// ini adalah format message berupa string
	msg := fmt.Sprintf("Buku telah berhasil diupdate. Jumlah yang diupdate %v rows/record", updateRows)

	// ini adalah format response message
	res := response{
		ID:      int64(id),
		Message: msg,
	}

	// kirim berupa response
	json.NewEncoder(w).Encode(res)
}

func DeleteMajor(w http.ResponseWriter, r *http.Request) {
	// ambil parameter idnya
	params := mux.Vars(r)

	// konversukan ke int yang sebelumnya adalah string
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		log.Fatalf("Tidak bisa mengubah dari string ke int. %v", err)
	}

	// panggil fungsi deleteStudent, dan convert int ke int64
	deleteRows := models.DeleteMajor(int64(id))

	// ini adalah  format message berupa string
	msg := fmt.Sprintf("Buku sukses di hapus. Total data yang dihapus %v", deleteRows)

	// ini adalah format response message
	res := response{
		ID:      int64(id),
		Message: msg,
	}

	// send the response
	json.NewEncoder(w).Encode(res)
}
