package models

import (
	"database/sql"
	"fmt"
	"log"

	"example.com/sia/config"

	_ "github.com/lib/pq" // postgress golang drive
)

type Student struct {
	ID    int64  `json:"id"`
	nim   string `json:"nim"`
	name  string `json:"name"`
	major string `json:"major"`
}

func AddStudent(student Student) int64 {
	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// tutup koneksinya di akhir proses
	defer db.Close()

	// buat query insert
	// mengembalikan nilai id akan mengembalikan id dari student yang dimasukkan ke db
	sqlStatement := `INSERT INTO student (nim, name, major)`

	// id yang dimasukkan akan disimpan di id ini
	var id int64

	//scan function akan menyimpan insert id didalam id id
	err := db.QueryRow(sqlStatement, student.nim, student.name, student.major)

	if err != nil {
		log.Fatalf("Tidak bisa mengeksekusi query %v", err)
	}

	fmt.Print("Insert data single recoed %v", id)

	return id
}

func GetAllStudent() ([]Student, error) {
	db := config.CreateConnection()

	defer db.Close()

	var students []Student

	sqlStatement := `SELECT * FROM student`

	rows, err := db.Query(sqlStatement)

	if err != nil {
		log.Fatalf("Tidak bisa mengeksekusi query. %v", err)
	}

	defer rows.Close()

	for rows.Next() {
		var student Student

		err = rows.Scan(&student.ID, &student.nim, &student.name, &student.major)

		if err != nil {
			log.Fatalf("Tidak bisa mengambil data. %v", err)
		}

		students = append(students, student)
	}

	return students, err
}

func GetOneStudent(id int64) (Student, error) {
	db := config.CreateConnection()

	defer db.Close()

	var student Student

	sqlStatement := `SELECT * FROM student where id=$1`

	row := db.QueryRow(sqlStatement, id)

	err := row.Scan(&student.ID, &student.nim, &student.name, &student.major)

	switch err {
	case sql.ErrNoRows:
		fmt.Println("Tidak ada data yang dicari")
		return student, nil
	case nil:
		return student, nil
	default:
		log.Fatalf("Tidak bisa mengambil data. %v", err)
	}

	return student, err
}

func UpdateStudent(id int64, student Student) int64 {

	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// kita tutup koneksinya di akhir proses
	defer db.Close()

	// kita buat sql query create
	sqlStatement := `UPDATE student SET nim=$2, name=$3, major=$4 WHERE id=$1`

	// eksekusi sql statement
	res, err := db.Exec(sqlStatement, id, student.nim, student.name, student.major)

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

func DeleteStudent(id int64) int64 {

	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// kita tutup koneksinya di akhir proses
	defer db.Close()

	// buat sql query
	sqlStatement := `DELETE FROM student WHERE id=$1`

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
