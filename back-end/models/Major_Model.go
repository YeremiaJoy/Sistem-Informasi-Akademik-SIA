package models

import (
	"database/sql"
	"fmt"
	"log"

	"example.com/sia/config"

	_ "github.com/lib/pq" // postgress goang drive
)

type Major struct {
	ID         int64  `json:"id"`
	code       string `json:"code"`
	major_name string `json:"major_name"`
}

func AddMajor(major Major) int64 {
	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// tutup koneksinya di akhir proses
	defer db.Close()

	// buat query insert
	// mengembalikan nilai id akan mengembalikan id dari student yang dimasukkan ke db
	sqlStatement := `INSERT INTO major (code, major_name)`

	// id yang dimasukkan akan disimpan di id ini
	var id int64

	//scan function akan menyimpan insert id didalam id id
	err := db.QueryRow(sqlStatement, major.code, major.major_name)

	if err != nil {
		log.Fatalf("Tidak bisa mengeksekusi query %v", err)
	}

	fmt.Print("Insert data single recoed %v", id)

	return id
}

func GetAllMajor() ([]Major, error) {
	db := config.CreateConnection()

	defer db.Close()

	var majors []Major

	sqlStatement := `SELECT * FROM major`

	rows, err := db.Query(sqlStatement)

	if err != nil {
		log.Fatalf("Tidak bisa mengeksekusi query. %v", err)
	}

	defer rows.Close()

	for rows.Next() {
		var major Major

		err = rows.Scan(&major.ID, &major.code, &major.major_name)

		if err != nil {
			log.Fatalf("Tidak bisa mengambil data. %v", err)
		}

		majors = append(majors, major)
	}

	return majors, err
}

func GetOneMajor(id int64) (Major, error) {
	db := config.CreateConnection()

	defer db.Close()

	var major Major

	sqlStatement := `SELECT * FROM major where id=$1`

	row := db.QueryRow(sqlStatement, id)

	err := row.Scan(&major.ID, &major.code, &major.major_name)

	switch err {
	case sql.ErrNoRows:
		fmt.Println("Tidak ada data yang dicari")
		return major, nil
	case nil:
		return major, nil
	default:
		log.Fatalf("Tidak bisa mengambil data. %v", err)
	}

	return major, err
}

func UpdateMajor(id int64, major Major) int64 {

	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// kita tutup koneksinya di akhir proses
	defer db.Close()

	// kita buat sql query create
	sqlStatement := `UPDATE major SET code=$2, major_name=$3 WHERE id=$1`

	// eksekusi sql statement
	res, err := db.Exec(sqlStatement, id, major.code, major.major_name)

	if err != nil {
		log.Fatalf("Tidak bisa mengeksekusi query. %v", err)
	}

	// cek berapa banyak row/data yang diupdate
	rowsAffected, err := res.RowsAffected()

	//kita cek
	if err != nil {
		log.Fatalf("Error ketika mengecheck rows/data yang diupdate. %v", err)
	}

	fmt.Printf("Total rows/record yang diupdate %v\n", rowsAffected)

	return rowsAffected
}

func DeleteMajor(id int64) int64 {

	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// kita tutup koneksinya di akhir proses
	defer db.Close()

	// buat sql query
	sqlStatement := `DELETE FROM major WHERE id=$1`

	// eksekusi sql statement
	res, err := db.Exec(sqlStatement, id)

	if err != nil {
		log.Fatalf("tidak bisa mengeksekusi query. %v", err)
	}

	// cek berapa jumlah data/row yang di hapus
	rowsAffected, err := res.RowsAffected()

	if err != nil {
		log.Fatalf("tidak bisa mencari data. %v", err)
	}

	fmt.Printf("Total data yang terhapus %v", rowsAffected)

	return rowsAffected
}
